import React from "react";
import { Link } from "react-router-dom";
// import { HttpGetHelper } from "../helpers";
import { DateTimeHelper } from "../helpers";

import Axios from "axios";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

const History = () => {
  const [user, setUser] = React.useState(null);
  const [history, setHistory] = React.useState([]);
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

        Axios.get(
          `http://localhost:3001/api/history/${authUser.id_member}`
        ).then((response) => {
          setHistory(response.data);
        });
      }
    }
  }, [data]);

  return (
    <>
      <Navbar class="bg-blueGray-800" />
      {!user && (
        <section className="relative py-20 items-center justify-center flex">
          <div
            className="py-10 text-center font-bold mt-auto flex items-center"
            style={{
              width: "50%",
              height: "30rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            Silahkan daftar menjadi member jika ingin melihat riwayat diagnosa
          </div>
        </section>
      )}
      {user && (
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
                  {history.length > 0 &&
                    history.map((val, index) => (
                      <div
                        className="text-blueGray-600 text-sm shadow-md my-2 p-4 flex"
                        style={{ width: "45%" }}
                        key={index}
                      >
                        <Detail item={val} user={user} />
                      </div>
                    ))}
                  {history.length === 0 && (
                    <div
                      className="py-10 text-center font-bold mt-auto flex items-center"
                      style={{
                        width: "50%",
                        height: "30rem",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                      }}
                    >
                      *** Belum ada riwayat ***
                    </div>
                  )}
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
      )}
      <Footer />
    </>
  );
};

const Detail = ({ item = null, user }) => {
  const [diagnosa, setDiagnosa] = React.useState([]);

  React.useEffect(() => {
    if (item) {
      Axios.get(
        `http://localhost:3001/api/diagnosis/${item.id_diagnosis}`
      ).then((response) => {
        response.data.forEach((item) => {
          setDiagnosa({ ...item });
        });
      });
    }
  }, [item]);

  return (
    <>
      <div
        className="w-1/3"
        style={{
          backgroundImage: `url(${
            user && user.foto_profil
              ? user.foto_profil
              : require("assets/img/default-image-user.png").default
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
          <span className="font-semibold">{user && user.nama_member}</span>
        </div>
        <div className="flex justify-between items-center py-1">
          Tanggal
          <span className="font-semibold">
            {DateTimeHelper.getFormatedDate(
              user && user.tanggal_lahir,
              "DD MMMM YYYY"
            )}
          </span>
        </div>
        <div className="flex justify-between items-center py-1">
          Status
          <span
            className="font-semibold"
            style={{ textTransform: "capitalize" }}
          >
            {diagnosa && diagnosa.hasil_diagnosis}
          </span>
        </div>
        <p className="mt-3 text-blueGray-800 font-bold mb-2 border-b pb-2">
          Diagnosa
        </p>
        {diagnosa && diagnosa.hasil_diagnosis === "negative" ? (
          <p>
            Hanya terkena{" "}
            <span style={{ textTransform: "lowercase" }}>{item.diagnosa}</span>.
          </p>
        ) : (
          <p>
            Terkena{" "}
            <span style={{ textTransform: "lowercase" }}>{item.diagnosa}</span>.
          </p>
        )}
      </div>
    </>
  );
};

export default History;
