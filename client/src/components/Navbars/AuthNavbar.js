/*eslint-disable*/
import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const history = useHistory();
  const data = localStorage.getItem("authUser");

  React.useEffect(() => {
    if (data) {
      const authUser = JSON.parse(data);
      setUser(authUser);
    }
  }, [data]);

  const login = () => {
    history.push("/auth/login");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <>
      <nav
        className={`top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg ${
          props && props.class
        }`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              Covid-19
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/diagnosis"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-viruses text-lg leading-lg " />
                  <span className="inline-block ml-2">Diagnosis</span>
                </a>
              </li>

              {/* <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/history"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-book-medical text-lg leading-lg " />
                  <span className="inline-block ml-2">Riwayat</span>
                </a>
              </li> */}

              {user && (
                <li className="flex items-center">
                  <a
                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                    href="/profile"
                  >
                    <i className="lg:text-blueGray-200 text-blueGray-400 fas fa-user-circle text-lg leading-lg " />
                    <span className="inline-block ml-2">
                      {user && user.email}
                    </span>
                  </a>
                </li>
              )}

              {!user && (
                <li className="flex items-center">
                  <button
                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                    onClick={login}
                  >
                    <i className="fas fa-sign-in-alt"></i> Login
                  </button>
                </li>
              )}

              {user && (
                <li className="flex items-center">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                    onClick={logout}
                  >
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
