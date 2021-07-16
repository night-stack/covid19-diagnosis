import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import firebase from "../services/firebase";
import Axios from "axios";
import { DateTimeHelper } from "../helpers";
import { ToastContainer, toast } from "react-toastify";
import FormMember from "./modal/memberForm";
import FormPasswordMember from "./modal/passwordForm";

export default function Profile() {
  const [user, setUser] = React.useState(null);
  const [riwayat, setRiwayat] = React.useState([]);
  const [handle, setHandle] = React.useState({
    editMode: false,
    editPassword: false,
    user: null,
    proses: false,
  });

  const history = useHistory();
  const data = localStorage.getItem("authUser");

  React.useEffect(() => {
    if (data) {
      const authUser = JSON.parse(data);
      if (authUser.role !== "user") {
        history.push("/auth/login");
      } else {
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
          response.data.forEach((item) => {
            setRiwayat({ ...item });
          });
        });
      }
    } else {
      history.push("/auth/login");
    }
  }, [data, history]);

  const editProfile = async (event) => {
    const { target } = event;
    const { files } = target;
    const metadata = {
      contentType: "image/jpeg",
    };
    const type = "png";
    const newKey = DateTimeHelper.getCurrentTimeMs();
    let urlImg = "";

    if (files[0]) {
      const avatarFile = files[0];
      if (user.foto_profil) {
        await firebase
          .storage()
          .ref(`users/img-${user.foto_profil}.${type}`)
          .delete();
      }
      await firebase
        .storage()
        .ref(`users/img-${newKey}.${type}`)
        .put(avatarFile, metadata);
      urlImg = await firebase
        .storage()
        .ref(`users/img-${newKey}.${type}`)
        .getDownloadURL();

      Axios.put(
        `http://localhost:3001/api/member/img-profile/${user.id_member}`,
        {
          image: urlImg,
        }
      ).then(() => {
        toast.success("Foto profil berhasil dirubah");
        window.location.reload();
      });
    }
  };

  const onSave = async (formData) => {
    Axios.put(`http://localhost:3001/api/member/edit/${formData.id}`, {
      name: formData.name,
      email: formData.email,
      gender: formData.gender,
      place: formData.place,
      address: formData.address,
      date: DateTimeHelper.getFormatedDate(
        formData.date,
        "YYYY-MM-DD HH:mm:ss"
      ),
      phone: formData.phone,
      status: formData.status,
    }).then(() => {
      toast.success("Data member berhasil dirubah");
      window.location.reload();
    });
  };
  const onToggleEditMode = (user) => {
    setHandle((prevState) => ({
      ...prevState,
      editMode: true,
      user,
    }));
  };

  const onSavePassword = async (formData) => {
    Axios.post("http://localhost:3001/api/auth/change-password", {
      id: formData.id,
      password: formData.password,
    }).then(() => {
      toast.success("Password berhasil dirubah");
      window.location.reload();
    });
  };
  const onToggleEditPasswordMode = (user) => {
    setHandle((prevState) => ({
      ...prevState,
      editPassword: true,
      user,
    }));
  };

  const clearForm = () => {
    setHandle({
      editMode: false,
      addMode: false,
      editPassword: false,
      user: null,
      proses: false,
    });
  };
  const onCloseModal = () => {
    clearForm();
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <Navbar />
      <FormMember
        user={handle.user}
        onSave={onSave}
        editMode={handle.editMode}
        onCloseModal={onCloseModal}
        clearForm={clearForm}
        proses={handle.proses}
        open={handle.editMode}
      />
      <FormPasswordMember
        user={handle.user}
        onSave={onSavePassword}
        onCloseModal={onCloseModal}
        clearForm={clearForm}
        proses={handle.proses}
        open={handle.editPassword}
      />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative profilepic">
                      <img
                        alt="..."
                        src={
                          user && user.foto_profil
                            ? user.foto_profil
                            : require("assets/img/default-image-user.png")
                                .default
                        }
                        className="profilepic__image shadow-xl rounded-full h-auto align-middle border-none max-w-150-px"
                      />
                      <input
                        id="image"
                        type="file"
                        key={DateTimeHelper.getCurrentTimeMs()}
                        onChange={editProfile}
                        className="file"
                      />
                      <div className="profilepic__content">
                        <span className="profilepic__icon">
                          <i className="fas fa-camera"></i>
                        </span>
                        <label htmlFor="image" className="profilepic__text">
                          Ganti Foto
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0 mr-3">
                      <button
                        className="bg-blueGray-800 active:bg-blueGray-65 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => onToggleEditMode(user)}
                      >
                        Edit Profil
                      </button>
                    </div>
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blueGray-800 active:bg-blueGray-65 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => onToggleEditPasswordMode(user)}
                      >
                        Ganti Password
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          {riwayat.length}
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Riwayat Diagnosis
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {user && user.nama_member}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {user && user.jenis_kelamin === "P" ? (
                      <i
                        className="fas fa-female"
                        style={{ color: "#F783AC", fontSize: "24px" }}
                      ></i>
                    ) : (
                      <i
                        className="fas fa-male text-lightBlue-400"
                        style={{ fontSize: "24px" }}
                      ></i>
                    )}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {user && user.tempat_lahir},{" "}
                    {DateTimeHelper.getFormatedDate(
                      user && user.tanggal_lahir,
                      "DD MMMM YYYY"
                    )}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
                    {user && user.email}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-mobile-alt mr-2 text-lg text-blueGray-400"></i>
                    {user && user.nomor_hp}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {user && user.alamat}
                      </p>
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
