import React from "react";
// import { Link } from "react-router-dom";
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
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?cs=srgb&dl=pexels-anna-shvets-4167541.jpg&fm=jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-virus fa-lg"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Perkembangan kasus di Indonesia
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Kami khawatir akan perkembangan kasus covid-19 di Indonesia.
                    Sejauh ini sudah tercatat kasus meninggal. Untuk itu ikuti
                    protokol 3M:
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-2 px-3 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-head-side-mask fa-lg"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">Memakai masker</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-2 px-3 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-hands-wash fa-lg"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">Mencuci tangan</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-2 px-3 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-people-arrows fa-lg"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">Menjaga jarak</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-48">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Tetap patuhi protokol kesehatan
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Jaga diri Anda, jaga keselamatan keluarga Anda.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">Perlu bantuan?</h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Hubungi kami, kami akan merespon 1x24 jam.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Kirim
                      </button>
                    </div>
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
