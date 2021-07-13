import React from "react";
import { Link } from "react-router-dom";
// import { HttpGetHelper } from "../helpers";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function History() {
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const fetch = async () => {
  //       const httpResponse = await HttpGetHelper.getData(
  //         "https://covid19.mathdro.id/api/countries/ID/confirmed",
  //         {}
  //       );
  //       if (httpResponse) {
  //         setData(httpResponse);
  //       }
  //     };

  //     fetch();
  //   }, []);

  return (
    <>
      <Navbar class="bg-blueGray-800" />
      <main>
        <section className="relative py-20" style={{ paddingBottom: "6rem" }}>
          <div className="container mx-auto px-4 h-full">
            <div
              className="items-center flex flex-wrap"
              style={{ minHeight: "35rem" }}
            >
              <div
                className="w-full md:w-8/12 ml-auto mr-auto p-4 flex flex-wrap my-auto justify-between"
                style={{
                  maxHeight: "33rem",
                  overflow: "auto",
                }}
              >
                <div
                  className="text-blueGray-600 text-sm shadow-md my-2 p-4 flex"
                  style={{ width: "45%" }}
                >
                  <div
                    className="w-1/3"
                    style={{
                      backgroundImage: `url(${
                        require("assets/img/default-image-user.png").default
                      })`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      marginRight: ".75rem",
                    }}
                  ></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center py-1">
                      Nama
                      <span className="font-semibold">Mifta</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Tanggal
                      <span className="font-semibold">12 Juli 2020</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Status
                      <span className="font-semibold">Negatif</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Persentase
                      <span className="font-semibold">20%</span>
                    </div>
                    <p className="mt-3 text-blueGray-800 font-bold mb-2 border-b pb-2">
                      Diagnosa
                    </p>
                    <p>Hanya terkena gejala flu ringan saja.</p>
                  </div>
                </div>

                <div
                  className="text-blueGray-600 text-sm shadow-md my-2 p-4 flex"
                  style={{ width: "45%" }}
                >
                  <div
                    className="w-1/3"
                    style={{
                      backgroundImage: `url(${
                        require("assets/img/default-image-user.png").default
                      })`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      marginRight: ".75rem",
                    }}
                  ></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center py-1">
                      Nama
                      <span className="font-semibold">Mifta</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Tanggal
                      <span className="font-semibold">12 Juli 2020</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Status
                      <span className="font-semibold">Negatif</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Persentase
                      <span className="font-semibold">20%</span>
                    </div>
                    <p className="mt-3 text-blueGray-800 font-bold mb-2 border-b pb-2">
                      Diagnosa
                    </p>
                    <p>Hanya terkena gejala flu ringan saja.</p>
                  </div>
                </div>

                <div
                  className="text-blueGray-600 text-sm shadow-md my-2 p-4 flex"
                  style={{ width: "45%" }}
                >
                  <div
                    className="w-1/3"
                    style={{
                      backgroundImage: `url(${
                        require("assets/img/default-image-user.png").default
                      })`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      marginRight: ".75rem",
                    }}
                  ></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center py-1">
                      Nama
                      <span className="font-semibold">Mifta</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Tanggal
                      <span className="font-semibold">12 Juli 2020</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Status
                      <span className="font-semibold">Negatif</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Persentase
                      <span className="font-semibold">20%</span>
                    </div>
                    <p className="mt-3 text-blueGray-800 font-bold mb-2 border-b pb-2">
                      Diagnosa
                    </p>
                    <p>Hanya terkena gejala flu ringan saja.</p>
                  </div>
                </div>

                <div
                  className="text-blueGray-600 text-sm shadow-md my-2 p-4 flex"
                  style={{ width: "45%" }}
                >
                  <div
                    className="w-1/3"
                    style={{
                      backgroundImage: `url(${
                        require("assets/img/default-image-user.png").default
                      })`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      marginRight: ".75rem",
                    }}
                  ></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center py-1">
                      Nama
                      <span className="font-semibold">Mifta</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Tanggal
                      <span className="font-semibold">12 Juli 2020</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Status
                      <span className="font-semibold">Negatif</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Persentase
                      <span className="font-semibold">20%</span>
                    </div>
                    <p className="mt-3 text-blueGray-800 font-bold mb-2 border-b pb-2">
                      Diagnosa
                    </p>
                    <p>Hanya terkena gejala flu ringan saja.</p>
                  </div>
                </div>

                <div
                  className="text-blueGray-600 text-sm shadow-md my-2 p-4 flex"
                  style={{ width: "45%" }}
                >
                  <div
                    className="w-1/3"
                    style={{
                      backgroundImage: `url(${
                        require("assets/img/default-image-user.png").default
                      })`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      marginRight: ".75rem",
                    }}
                  ></div>
                  <div className="w-2/3">
                    <div className="flex justify-between items-center py-1">
                      Nama
                      <span className="font-semibold">Mifta</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Tanggal
                      <span className="font-semibold">12 Juli 2020</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Status
                      <span className="font-semibold">Negatif</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      Persentase
                      <span className="font-semibold">20%</span>
                    </div>
                    <p className="mt-3 text-blueGray-800 font-bold mb-2 border-b pb-2">
                      Diagnosa
                    </p>
                    <p>Hanya terkena gejala flu ringan saja.</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 mx-auto">
                <div
                  className="text-center px-12"
                  style={{ marginTop: "auto" }}
                >
                  <h3 className="text-3xl font-semibold">Sesi Diagnosis</h3>
                  <div className="mt-4 text-md leading-relaxed text-blueGray-500">
                    <p>
                      Pada sesi diagnosis, kamu akan diberikan beberapa
                      pertanyaan seputar kesehatan yang harus dijawab sesuai
                      dengan kondisi sebenarnya kesehatan kamu.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      to="/diagnosis"
                      className="px-6 py-2 text-xs font-bold bg-lightBlue-400 active:bg-lightBlue-100 uppercase text-white rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                    >
                      Mulai
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
