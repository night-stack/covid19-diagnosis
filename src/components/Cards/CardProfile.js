import React from "react";
import { DateTimeHelper } from "../../helpers";
import Axios from "axios";
import firebase from "../../services/firebase";
import { ToastContainer, toast } from "react-toastify";

export default function CardProfile({ user = null }) {
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
        let profileRef = firebase.storage().refFromURL(user.foto_profil);
        profileRef.delete();
      }
      await firebase
        .storage()
        .ref(`users/img-${newKey}.${type}`)
        .put(avatarFile, metadata);
      urlImg = await firebase
        .storage()
        .ref(`users/img-${newKey}.${type}`)
        .getDownloadURL();

      if (urlImg !== "") {
        console.log(urlImg);
        Axios.put(
          `http://localhost:3001/api/admin/img-profile/${user.id_admin}`,
          {
            image: urlImg,
          }
        ).then(() => {
          toast.success("Foto profil berhasil dirubah");
          window.location.reload();
        });
      }
    }
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="relative flex flex-col min-w-0 break-words w-full h-full mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative profilepic">
                <img
                  alt="..."
                  src={
                    user && user.foto_profil
                      ? user.foto_profil
                      : require("assets/img/default-image-user.png").default
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
          </div>
        </div>
      </div>
    </>
  );
}
