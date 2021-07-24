import React from "react";
import { Switch, Route } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import LoginAdmin from "views/admin/auth/Login.js";
import RegisterAdmin from "views/admin/auth/Register.js";
import ForgotPassword from "views/auth/ForgotPassword";
import ForgotPasswordAdmin from "views/admin/auth/ForgotPassword";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Route
              path="/auth/forgot-password"
              exact
              component={ForgotPassword}
            />
            <Route path="/auth/admin/login" exact component={LoginAdmin} />
            <Route
              path="/auth/admin/register"
              exact
              component={RegisterAdmin}
            />
            <Route
              path="/auth/admin/forgot-password"
              exact
              component={ForgotPasswordAdmin}
            />
            {/* <Redirect from="/auth" to="/auth/login" /> */}
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
