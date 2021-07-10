import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HttpGetHelper } from "../../helpers";

const FormDiagnosis = () => {
  const [review, setReview] = useState([]);
  const [session, setSession] = useState(0);
  const [start, setStart] = useState(false);
  const pertanyaan = [
    {
      title: "Pertanyaan 1",
      isi: "Apakah kamu sering batuk belakangan ini?",
    },
    {
      title: "Pertanyaan 2",
      isi: "Apakah kamu sering batuk belakangan ini?",
    },
    {
      title: "Pertanyaan 3",
      isi: "Apakah kamu sering batuk belakangan ini?",
    },
    {
      title: "Pertanyaan 4",
      isi: "Apakah kamu sering batuk belakangan ini?",
    },
    {
      title: "Pertanyaan 5",
      isi: "Apakah kamu sering batuk belakangan ini?",
    },
  ];

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
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div>
                <h3 className="font-semibold">Pertanyaan 1</h3>
                <div className="mt-4 text-sm leading-relaxed text-blueGray-500">
                  Apakah kamu sering batuk belakangan ini?
                  <div></div>
                </div>
                <div className="mt-20 flex justify-between">
                  <button
                    onClick={() => setStart(!start)}
                    className="text-xs font-bold bg-red-400 active:bg-red-100 uppercase text-white px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => setStart(!start)}
                    className="text-xs font-bold bg-lightBlue-400 active:bg-lightBlue-100 uppercase text-white px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                  >
                    Lanjut
                  </button>
                </div>
              </div>
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
                  {/* <ul className="text-sm flex justify-between border-b py-2">
                  <li>1.</li>
                  <li style={{ width: "25rem" }}>
                    Apakah kamu sering batuk belakangan ini?
                  </li>
                  <li className="font-bold">Tidak</li>
                </ul> */}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-6/12 ml-auto mr-auto p-4">
              <div>
                <h3 className="text-3xl font-semibold">Sesi Diagnosis</h3>
                <div className="mt-4 text-lg leading-relaxed text-blueGray-500">
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
                <div className="mt-auto">
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

export default FormDiagnosis;
