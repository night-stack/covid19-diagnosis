import React, { useState } from "react";

const QUESTION_DATA = [
  {
    title: "Pertanyaan 1",
    question: "Apakah kamu sering batuk belakangan ini?",
    answer: false,
  },
  {
    title: "Pertanyaan 2",
    question: "Apakah kamu mengalami demam?",
    answer: false,
  },
  {
    title: "Pertanyaan 3",
    question: "Apakah kamu mengalami masalah pernafasan?",
    answer: false,
  },
  {
    title: "Pertanyaan 4",
    question: "Apakah kondisi tubuh kamu sekarang lemas dan tidak nafsu makan?",
    answer: false,
  },
  {
    title: "Pertanyaan 5",
    question: "Apakah kamu tidak dapat mencium aroma atau mengecap rasa?",
    answer: false,
  },
];

const FormDiagnosis = () => {
  const [review, setReview] = useState([]);
  const [session, setSession] = useState(0);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);
  const [pertanyaan, setPertanyaan] = useState(QUESTION_DATA);

  const nextSession = (id, item) => {
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
    setSession(session + 1);

    // setReview((prevState) => ({ ...prevState }, { id, answer }));
  };

  const prevSession = () => {
    setSession(session - 1);
  };

  const radioChange = (id, answer) => {
    let question = [...pertanyaan];
    question[id].answer = answer;

    setPertanyaan(question);
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
    setFinish(true);
  };

  return (
    <div
      className="container mx-auto px-4 h-full"
      style={start ? { height: "22rem" } : null}
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
                  Miftahul Huda
                </h5>
                <div className="text-sm text-blueGray-500">
                  <p>mifta@gmail.com | 08122321313</p>
                  <p>Laki-laki</p>
                  <p>Medan, 10 Juli 2022</p>
                  <p className="uppercase">
                    Jl. Thamrin No. 1, Kota Medan, Sumatera Utara
                  </p>
                </div>
                <div className="my-6 text-blueGray-500">
                  Berdasarkan hasil diagnosa yang dilakukan pada kalkulasi
                  jawaban sesi tanya jawab sebelumnya, bahwasannya pengguna atas
                  nama <b>Mifta Huda</b> telah <b>Terbebas</b> dari Covid-19.
                </div>
                <div
                  className="border-t-2 flex justify-between items-center"
                  style={{ paddingTop: "1.2rem" }}
                >
                  <button className="w-full px-3 py-2 rounded text-white bg-lightBlue-400 mr-4">
                    Coba lagi
                  </button>
                  <button className="w-full px-3 py-2 rounded text-white bg-blueGray-800">
                    Lihat riwayat
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  {pertanyaan.map((item, index) => {
                    const show = index === session ? "" : "hidden";
                    return (
                      <QuestionForm
                        show={show}
                        item={item}
                        index={index}
                        radioChange={radioChange}
                        session={session}
                        setStart={setStart}
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
            onClick={() => nextSession(index, item)}
            className="text-xs font-bold bg-lightBlue-400 active:bg-lightBlue-100 uppercase text-white px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
          >
            Lanjut
          </button>
        )}
      </div>
    </div>
  );
};

export default FormDiagnosis;
