import React from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import firebase from "../../../services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const FORM_INITIAL = {
  name: "",
  email: "",
  password: "",
  retype: "",
  policy: false,
};

export default function Register() {
  const [formData, setFormData] = React.useState(FORM_INITIAL);
  const history = useHistory();

  const submit = () => {
    const { name, email, password } = formData;

    Axios.post("http://localhost:3001/api/auth/admin/register", {
      name: name,
      email: email,
      password: password,
    }).then(() => {
      toast.success("Registrasi berhasil silahkan login");
      setTimeout(() => {
        history.push("/auth/admin/login");
      }, 1500);
    });
  };

  const doLoginSocial = (googleProvider = true) => {
    const provider = googleProvider
      ? new firebase.auth.GoogleAuthProvider()
      : new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((authUser) => {
        return afterSocial(authUser);
      })
      .then(() => {
        history.push("/profile");
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          const pendingCred = error.credential;
          firebase
            .auth()
            .fetchSignInMethodsForEmail(error.email)
            .then((methods) => {
              if (methods[0] === "password") {
                // TODO: will implement later
                return;
              }

              const otherProvider = new firebase.auth.GoogleAuthProvider();
              firebase
                .auth()
                .signInWithPopup(otherProvider)
                .then((result) => {
                  result.user
                    .linkAndRetrieveDataWithCredential(pendingCred)
                    .then(() => {
                      return afterSocial(result);
                    })
                    .then(() => {
                      history.push("/profile");
                    });
                });
            });
        } else {
          const errorMessage = error.message;
          alert("Login gagal atau akun sudah digunakan!", errorMessage);
        }
      });
  };

  const afterSocial = async (authUser) => {
    const { password } = formData;

    await Axios.post("http://localhost:3001/api/auth/register", {
      name: authUser.user.providerData[0].displayName,
      email: authUser.user.providerData[0].email,
      password: password,
      image: authUser.user.providerData[0].photoURL,
    }).then(() => {
      alert("Success");
    });

    return true;
  };

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlerCheckbox = () => {
    setFormData((prevState) => ({
      ...prevState,
      policy: !prevState.policy,
    }));
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg").default}
                    />
                    Google
                  </button>
                  <button
                    className="active:bg-blueGray-50 text-white px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    style={{ backgroundColor: "#0B84ED" }}
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/facebook.svg").default}
                    />
                    Facebook
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

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

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        name="policy"
                        type="checkbox"
                        checked={formData.policy}
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        onChange={handlerCheckbox}
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#privacy"
                          className="text-grayBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
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
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/auth/admin/login" className="text-blueGray-200">
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
