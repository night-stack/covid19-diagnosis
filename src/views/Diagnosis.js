import React from "react";
import { HttpGetHelper } from "../helpers";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import FormDiagnosis from "components/Diagnosis";

export default function Diagnosis() {
  React.useEffect(() => {
    const fetch = async () => {
      const httpResponse = await HttpGetHelper.getData(
        "http://localhost:8080/home/test",
        { "Access-Control-Allow-Origin": "*" }
      );
      if (httpResponse) {
        console.log(httpResponse);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <Navbar class="bg-blueGray-800" />
      <main>
        <section className="relative py-32">
          <FormDiagnosis />
        </section>
      </main>
      <Footer />
    </>
  );
}
