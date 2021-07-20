import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { DateTimeHelper } from "../../helpers";

const QUESTION_NODE = [
  {
    title: "Kontak Langsung",
    indikasi: "contactWithConfirm",
    question:
      "Apakah anda ada interaksi langsung dengan pasien positif covid dalam 14 hari kebelakang?",
    answer: false,
  },
  {
    title: "Lainnya",
    indikasi: "other",
    question:
      "Apakah anda dalam 14 hari kebelakang pernah berpergian ketempat umum. Seperti Pusat Perbelanjaan, Tempat Wisata, Pasar, Restoran, Taman, Gym dsb.?",
    answer: false,
  },
  {
    title: "Abroad",
    indikasi: "abroad",
    question:
      "Apakah anda pernah berpergian keluar negeri dalam 14 hari kebelakang?",
    answer: false,
  },
];

const QUESTION_DATA = [
  {
    title: "Batuk",
    indikasi: "batuk",
    question:
      "Apakah anda mengalami Batuk berkepanjangan dalam 5 hari kebelakang?",
    answer: false,
  },
  {
    title: "Demam",
    indikasi: "demam",
    question:
      "Apakah anda mengalami Demam dengan suhu 37.5 derajat celcius atau selebihnya?",
    answer: false,
  },
  {
    title: "Sakit Tenggorokan",
    indikasi: "sakitTenggorokan",
    question: "Apakah anda mengalami sakit di tenggorokan anda?",
    answer: false,
  },
  {
    title: "Sakit Kepala",
    indikasi: "sakitKepala",
    question: "Apakah anda mengalami sakit di kepala anda?",
    answer: false,
  },
  {
    title: "Sesak Nafas",
    indikasi: "sesakNafas",
    question: "Apakah anda mengalami Sesak Napas?",
    answer: false,
  },
];

const FormDiagnosis = () => {
  const [review, setReview] = useState([]);
  const [session, setSession] = useState(0);
  const [nodeSession, setNodeSession] = useState(0);
  const [user, setUser] = useState(null);
  const [start, setStart] = useState(false);
  const [nodeMode, setNodeMode] = useState(true);
  const [finish, setFinish] = useState(false);
  const [node, setNode] = useState(QUESTION_NODE);
  const [pertanyaan, setPertanyaan] = useState(QUESTION_DATA);
  const [payload, setPayload] = useState(null);
  const data = localStorage.getItem("authUser");

  React.useEffect(() => {
    if (data) {
      const authUser = JSON.parse(data);
      if (authUser.role === "user") {
        Axios.get(
          `http://localhost:3001/api/member/${authUser.id_member}`
        ).then((response) => {
          response.data.forEach((item) => {
            setUser({ ...item });
          });
        });
      }
    }
  }, [data]);

  const nextSession = (item) => {
    const array = [...review];
    const bol = item.answer === true ? 1 : 0;

    function getIndex(value, arr, prop) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    }
    const index = getIndex(item.indikasi, array, "id");

    if (index !== -1) {
      array.splice(index, 1);
      setReview(array);
    } else {
      setReview([
        ...review,
        { id: item.indikasi, question: item.question, answer: item.answer },
      ]);
    }
    payload[item.indikasi] = bol;
    setSession(session + 1);

    // setReview((prevState) => ({ ...prevState }, { id, answer }));
  };

  const nodeNextSession = (item) => {
    const array = [...review];

    function getIndex(value, arr, prop) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    }
    const index = getIndex(item.indikasi, array, "id");

    if (index !== -1) {
      array.splice(index, 1);
      setReview(array);
    } else {
      setReview([
        ...review,
        { id: item.indikasi, question: item.question, answer: item.answer },
      ]);
    }

    if (item.answer === true) {
      setNodeMode(false);
      setPayload({ indikasi: item.indikasi });
    } else {
      setNodeSession(nodeSession + 1);
    }

    // setReview((prevState) => ({ ...prevState }, { id, answer }));
  };

  const prevSession = () => {
    setSession(session - 1);
  };

  const nodePrevSession = () => {
    setNodeSession(nodeSession - 1);
  };

  const radioChange = (id, answer) => {
    let question = [...pertanyaan];
    question[id].answer = answer;

    setPertanyaan(question);
  };

  const nodeRadioChange = (id, answer) => {
    let question = [...node];
    question[id].answer = answer;

    setNode(question);
  };

  const clearForm = () => {
    setReview([]);
    setSession(0);
    setNodeSession(0);
    setFinish(false);
    setStart(false);
    setPertanyaan(QUESTION_DATA);
    setNode(QUESTION_NODE);
    setNodeMode(true);
    setPayload(null);
  };

  const finishSession = (id, item) => {
    const array = [...review];

    function getIndex(value, arr, prop) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    }
    const index = getIndex(id, array, "id");

    if (index !== -1) {
      array.splice(index, 1);
      setReview(array);
    } else {
      setReview([
        ...review,
        { id, question: item.question, answer: item.answer },
      ]);
    }
    setSession(0);
    setNodeSession(0);
    setFinish(true);
  };

  return (
    <div
      className="container mx-auto px-4 h-full"
      style={start ? { minHeight: "22rem" } : null}
    >
      <div
        className="items-center flex flex-wrap"
        style={start ? { marginTop: "auto", height: "100%" } : null}
      >
        {start ? (
          <>
            {finish ? (
              <div className="w-6/12 justify-center items-center mx-auto text-center">
                <h1
                  className="font-semibold text-3xl uppercase border-b-2 border-blueGray-800"
                  style={{ paddingBottom: "1.2rem", marginBottom: "1.2rem" }}
                >
                  Hasil Diagnosa
                </h1>
                <h5 className="text-xl font-semibold uppercase">
                  {user && user.nama_member}
                </h5>
                <div className="text-sm text-blueGray-500">
                  <p>{`${user & user.email} | ${
                    user && user.nomor_hp ? user.nomor_hp : "Belum diatur"
                  }`}</p>
                  <p>
                    {user?.jenis_kelamin === "L" && "Laki"}
                    {user?.jenis_kelamin === "P" && "Perempuan"}
                    {user && !user.jenis_kelamin && "Belum diatur"}
                  </p>
                  <p>{`${
                    user && user.tempat_lahir
                      ? user.tempat_lahir
                      : "Belum diatur"
                  }, ${
                    user && user.tanggal_lahir
                      ? DateTimeHelper.getFormatedDate(
                          user.tanggal_lahir,
                          "DD MMMM YYYY"
                        )
                      : "Belum diatur"
                  }`}</p>
                  <p className="uppercase">
                    {user && user.alamat ? user.alamat : "Alamat belum diatur"}
                  </p>
                </div>
                <div className="my-6 text-blueGray-500">
                  Berdasarkan hasil diagnosa yang dilakukan pada kalkulasi
                  jawaban sesi tanya jawab sebelumnya, bahwasannya pengguna atas
                  nama <b>{user && user.nama_member}</b> telah <b>Terbebas</b>{" "}
                  dari Covid-19.
                </div>
                {user && (
                  <div
                    className="border-t-2 flex justify-between items-center"
                    style={{ paddingTop: "1.2rem" }}
                  >
                    <button
                      onClick={clearForm}
                      className="w-full px-3 py-2 rounded text-white bg-lightBlue-400 mr-4"
                    >
                      Coba lagi
                    </button>
                    <Link
                      to="/history"
                      className="w-full px-3 py-2 rounded text-white bg-blueGray-800"
                    >
                      Lihat riwayat
                    </Link>
                  </div>
                )}
                {!user && (
                  <div
                    className="border-t-2 flex justify-between items-center"
                    style={{ paddingTop: "1.2rem" }}
                  >
                    <button
                      onClick={clearForm}
                      className="w-full px-3 py-2 rounded text-white bg-lightBlue-400"
                    >
                      Coba lagi
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  {nodeMode &&
                    node.map((item, index) => {
                      const showNode = index === nodeSession ? "" : "hidden";
                      return (
                        <NodeForm
                          show={showNode}
                          item={item}
                          index={index}
                          radioChange={nodeRadioChange}
                          session={nodeSession}
                          nextSession={nodeNextSession}
                          prevSession={nodePrevSession}
                        />
                      );
                    })}

                  {!nodeMode &&
                    pertanyaan.map((item, index) => {
                      const show = index === session ? "" : "hidden";
                      return (
                        <QuestionForm
                          show={show}
                          item={item}
                          index={index}
                          radioChange={radioChange}
                          session={session}
                          nextSession={nextSession}
                          prevSession={prevSession}
                          start={start}
                          pertanyaan={pertanyaan}
                          finishSession={finishSession}
                        />
                      );
                    })}
                </div>
                {/* <div className="md:w-8/12"></div> */}
                <div className="md:w-2/12"></div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div>
                    <h3 className="font-bold">Riwayat</h3>
                    <div className="mt-4 text-lg leading-relaxed text-blueGray-500">
                      <ul className="text-sm flex justify-between border-b border-t py-2">
                        <li>No.</li>
                        <li className="pl-3" style={{ width: "25rem" }}>
                          Pertanyaan
                        </li>
                        <li>Jawaban</li>
                      </ul>
                      {review.length > 0 &&
                        review.map((val, index) => (
                          <ul className="text-sm flex justify-between border-b py-2">
                            <li>{`${index + 1}.`}</li>
                            <li style={{ width: "25rem" }}>{val.question}</li>
                            <li
                              className="font-bold text-right"
                              style={{ width: "38.38px" }}
                            >
                              {val.answer === true ? "Ya" : "Tidak"}
                            </li>
                          </ul>
                        ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="w-full md:w-6/12 ml-auto mr-auto p-4">
              <div>
                <h3 className="text-3xl font-semibold">Sesi Diagnosis</h3>
                <div className="mt-4 text-md leading-relaxed text-blueGray-500">
                  <p>
                    Dalam sesi diagnosis ini, kamu akan diberikan beberapa
                    pertanyaan seputar kesehatan yang harus dijawab sesuai
                    dengan kondisi sebenarnya kesehatan kamu.
                  </p>

                  <p className="mt-3 mb-3">
                    Sistem akan melakukan kalkulasi dari total keseluruhan
                    jawaban untuk menentukan apakah kamu menunjukkan gejala
                    covid-19 atau tidak.
                  </p>
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => setStart(!start)}
                    className="text-xs font-bold bg-lightBlue-400 active:bg-lightBlue-100 uppercase text-white px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                  >
                    Mulai
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.pexels.com/photos/7578797/pexels-photo-7578797.jpeg?cs=srgb&dl=pexels-cottonbro-7578797.jpg&fm=jpg"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const QuestionForm = ({
  show,
  index,
  item,
  radioChange,
  session,
  pertanyaan,
  nextSession,
  prevSession,
  finishSession,
}) => {
  return (
    <div key={index} className={show}>
      <h3 className="font-semibold">{item.title}</h3>
      <div className="mt-4 text-sm leading-relaxed text-blueGray-500">
        {item.question}
      </div>
      <div className="mt-4">
        <input
          type="radio"
          name={`pertanyaan${index}`}
          id={`pertanyaan${index}-1`}
          checked={item.answer === true}
          onChange={() => radioChange(index, true)}
        />
        <label
          htmlFor={`pertanyaan${index}-1`}
          className="ml-3 text-sm leading-relaxed text-blueGray-500"
        >
          Ya
        </label>
      </div>
      <div>
        <input
          type="radio"
          name={`pertanyaan${index}`}
          id={`pertanyaan${index}-0`}
          checked={item.answer === false}
          onChange={() => radioChange(index, false)}
        />
        <label
          htmlFor={`pertanyaan${index}-0`}
          className="ml-3 text-sm leading-relaxed text-blueGray-500"
        >
          Tidak
        </label>
      </div>
      <div className="mt-20 flex justify-between">
        {session !== 0 && (
          <button
            onClick={prevSession}
            className="text-xs font-bold bg-red-400 active:bg-red-100 uppercase text-white px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
          >
            Kembali
          </button>
        )}
        {pertanyaan.length - 1 === session ? (
          <button
            onClick={() => finishSession(index, item)}
            className="text-xs font-bold bg-lightBlue-400 active:bg-lightBlue-100 uppercase text-white px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
          >
            Selesai
          </button>
        ) : (
          <button
            onClick={() => nextSession(item)}
            className="text-xs font-bold bg-lightBlue-400 active:bg-lightBlue-100 uppercase text-white px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
          >
            Lanjut
          </button>
        )}
      </div>
    </div>
  );
};

const NodeForm = ({
  show,
  index,
  item,
  radioChange,
  session,
  nextSession,
  prevSession,
}) => {
  return (
    <div key={item.indikasi} className={show}>
      <h3 className="font-semibold">{item.title}</h3>
      <div className="mt-4 text-sm leading-relaxed text-blueGray-500">
        {item.question}
      </div>
      <div className="mt-4">
        <input
          type="radio"
          name={item.indikasi}
          id={`${item.indikasi}-1`}
          checked={item.answer === true}
          onChange={() => radioChange(index, true)}
        />
        <label
          htmlFor={`${item.indikasi}-1`}
          className="ml-3 text-sm leading-relaxed text-blueGray-500"
        >
          Ya
        </label>
      </div>
      <div>
        <input
          type="radio"
          name={item.indikasi}
          id={`${item.indikasi}-0`}
          checked={item.answer === false}
          onChange={() => radioChange(index, false)}
        />
        <label
          htmlFor={`${item.indikasi}-0`}
          className="ml-3 text-sm leading-relaxed text-blueGray-500"
        >
          Tidak
        </label>
      </div>
      <div className="mt-20 flex justify-between">
        {session !== 0 && (
          <button
            onClick={prevSession}
            className="text-xs font-bold bg-red-400 active:bg-red-100 uppercase text-white px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
          >
            Kembali
          </button>
        )}
        <button
          onClick={() => nextSession(item)}
          className="text-xs font-bold bg-lightBlue-400 active:bg-lightBlue-100 uppercase text-white px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
};

export default FormDiagnosis;
