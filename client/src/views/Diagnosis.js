import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import FormDiagnosis from "components/Diagnosis";

export default function Diagnosis() {
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
