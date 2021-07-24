import React from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const FORM_INITIAL = {
  email: "",
  password: "",
  retype: "",
};

export default function ForgotPassword() {
  const [formData, setFormData] = React.useState(FORM_INITIAL);
  const history = useHistory();

  const submit = () => {
    const { email, password } = formData;

    Axios.put("http://localhost:3001/api/auth/admin/forgot-password", {
      email: email,
      password: password,
    }).then(() => {
      toast.success("Password berhasil dirubah, silahkan login");
      setTimeout(() => {
        history.push("/auth/login");
      }, 1500);
    });
  };

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6"></div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Retype Password
                    </label>
                    <input
                      type="password"
                      name="retype"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Retype Password"
                      value={formData.retype}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      disabled={
                        formData.password !== formData.retype ||
                        formData.password === "" ||
                        formData.email === "" ||
                        formData.username === "" ||
                        formData.policy === false
                      }
                      onClick={submit}
                    >
                      Konfirmasi
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/auth/login" className="text-blueGray-200">
                  <small>Back to Login</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
