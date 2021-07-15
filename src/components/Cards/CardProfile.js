import React from "react";

// components

export default function CardProfile({ user = null }) {
  return (
    <>
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
                <div className="profilepic__content">
                  <span className="profilepic__icon">
                    <i className="fas fa-camera"></i>
                  </span>
                  <span className="profilepic__text">Ganti Foto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
