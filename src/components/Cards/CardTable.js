import React from "react";
import PropTypes from "prop-types";

// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color, api }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
        style={{ overflow: "auto" }}
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Perhitungan
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Node 1
                  </p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Indikasi
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Kepala
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sakit Kepala
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sesak Nafas
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sesak Nafas
                </td>
              </tr>
              {/* node 1 */}
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {api?.node1?.result?.contactWithConfirm?.batuk?.batuk.total}
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.batuk?.batuk
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.batuk?.batuk
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.contactWithConfirm?.batuk?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.contactWithConfirm?.batuk?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.contactWithConfirm?.batuk?.tidakBatuk
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.batuk?.tidakBatuk
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.batuk?.tidakBatuk
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.contactWithConfirm?.batuk?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.contactWithConfirm?.batuk?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {api?.node1?.result?.contactWithConfirm?.demam?.demam.total}
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.demam?.demam
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.demam?.demam
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.contactWithConfirm?.demam?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.contactWithConfirm?.demam?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.contactWithConfirm?.demam?.tidakDemam
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.demam?.tidakDemam
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.demam?.tidakDemam
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.contactWithConfirm?.demam?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.contactWithConfirm?.demam?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitKepala
                        ?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitKepala
                        ?.sakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitKepala
                        ?.sakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.contactWithConfirm?.sakitKepala?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitKepala
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitKepala
                        ?.tidakSakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitKepala
                        ?.tidakSakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitKepala
                        ?.tidakSakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.contactWithConfirm?.sakitKepala?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitKepala
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.sakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.sakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.sakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.tidakSakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.tidakSakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.tidakSakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node1?.result?.contactWithConfirm?.sakitTenggorokan
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.contactWithConfirm?.sesakNafas
                        ?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.sesakNafas
                        ?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.sesakNafas
                        ?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.contactWithConfirm?.sesakNafas?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node1?.result?.contactWithConfirm?.sesakNafas
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.contactWithConfirm?.sesakNafas
                        ?.tidakSesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.contactWithConfirm?.sesakNafas
                        ?.tidakSesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.contactWithConfirm?.sesakNafas
                        ?.tidakSesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.contactWithConfirm?.sesakNafas?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node1?.result?.contactWithConfirm?.sesakNafas
                        ?.gainRasio
                    }
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  other
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>Total :{api?.node1?.result?.other?.batuk?.batuk.total}</p>
                  <p>
                    Positive :{api?.node1?.result?.other?.batuk?.batuk.Positive}
                  </p>
                  <p>
                    Negative :{api?.node1?.result?.other?.batuk?.batuk.Negative}
                  </p>
                  <p>Hasil : {api?.node1?.result?.other?.batuk?.hasil}</p>
                  <p>
                    Gain Rasio :{api?.node1?.result?.other?.batuk?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :{api?.node1?.result?.other?.batuk?.tidakBatuk.total}
                  </p>
                  <p>
                    Positive :
                    {api?.node1?.result?.other?.batuk?.tidakBatuk.Positive}
                  </p>
                  <p>
                    Negative :
                    {api?.node1?.result?.other?.batuk?.tidakBatuk.Negative}
                  </p>
                  <p>Hasil : {api?.node1?.result?.other?.batuk?.hasil}</p>
                  <p>
                    Gain Rasio :{api?.node1?.result?.other?.batuk?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>Total :{api?.node1?.result?.other?.demam?.demam.total}</p>
                  <p>
                    Positive :{api?.node1?.result?.other?.demam?.demam.Positive}
                  </p>
                  <p>
                    Negative :{api?.node1?.result?.other?.demam?.demam.Negative}
                  </p>
                  <p>Hasil : {api?.node1?.result?.other?.demam?.hasil}</p>
                  <p>
                    Gain Rasio :{api?.node1?.result?.other?.demam?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :{api?.node1?.result?.other?.demam?.tidakDemam.total}
                  </p>
                  <p>
                    Positive :
                    {api?.node1?.result?.other?.demam?.tidakDemam.Positive}
                  </p>
                  <p>
                    Negative :
                    {api?.node1?.result?.other?.demam?.tidakDemam.Negative}
                  </p>
                  <p>Hasil : {api?.node1?.result?.other?.demam?.hasil}</p>
                  <p>
                    Gain Rasio :{api?.node1?.result?.other?.demam?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {api?.node1?.result?.other?.sakitKepala?.sakitKepala.total}
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.other?.sakitKepala?.sakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.other?.sakitKepala?.sakitKepala
                        .Negative
                    }
                  </p>
                  <p>Hasil : {api?.node1?.result?.other?.sakitKepala?.hasil}</p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.other?.sakitKepala?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.other?.sakitKepala?.tidakSakitKepala
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.other?.sakitKepala?.tidakSakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.other?.sakitKepala?.tidakSakitKepala
                        .Negative
                    }
                  </p>
                  <p>Hasil : {api?.node1?.result?.other?.sakitKepala?.hasil}</p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.other?.sakitKepala?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.other?.sakitTenggorokan
                        ?.sakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.other?.sakitTenggorokan
                        ?.sakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.other?.sakitTenggorokan
                        ?.sakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil : {api?.node1?.result?.other?.sakitTenggorokan?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.other?.sakitTenggorokan?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.other?.sakitTenggorokan
                        ?.tidakSakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.other?.sakitTenggorokan
                        ?.tidakSakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.other?.sakitTenggorokan
                        ?.tidakSakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil : {api?.node1?.result?.other?.sakitTenggorokan?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.other?.sakitTenggorokan?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {api?.node1?.result?.other?.sesakNafas?.sesakNafas.total}
                  </p>
                  <p>
                    Positive :
                    {api?.node1?.result?.other?.sesakNafas?.sesakNafas.Positive}
                  </p>
                  <p>
                    Negative :
                    {api?.node1?.result?.other?.sesakNafas?.sesakNafas.Negative}
                  </p>
                  <p>Hasil : {api?.node1?.result?.other?.sesakNafas?.hasil}</p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.other?.sesakNafas?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.other?.sesakNafas?.tidakSesakNafas
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.other?.sesakNafas?.tidakSesakNafas
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.other?.sesakNafas?.tidakSesakNafas
                        .Negative
                    }
                  </p>
                  <p>Hasil : {api?.node1?.result?.other?.sesakNafas?.hasil}</p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.other?.sesakNafas?.gainRasio}
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  abroad
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>Total :{api?.node1?.result?.abroad?.batuk?.batuk.total}</p>
                  <p>
                    Positive :
                    {api?.node1?.result?.abroad?.batuk?.batuk.Positive}
                  </p>
                  <p>
                    Negative :
                    {api?.node1?.result?.abroad?.batuk?.batuk.Negative}
                  </p>
                  <p>Hasil : {api?.node1?.result?.abroad?.batuk?.hasil}</p>
                  <p>
                    Gain Rasio :{api?.node1?.result?.abroad?.batuk?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :{api?.node1?.result?.abroad?.batuk?.tidakBatuk.total}
                  </p>
                  <p>
                    Positive :
                    {api?.node1?.result?.abroad?.batuk?.tidakBatuk.Positive}
                  </p>
                  <p>
                    Negative :
                    {api?.node1?.result?.abroad?.batuk?.tidakBatuk.Negative}
                  </p>
                  <p>Hasil : {api?.node1?.result?.abroad?.batuk?.hasil}</p>
                  <p>
                    Gain Rasio :{api?.node1?.result?.abroad?.batuk?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>Total :{api?.node1?.result?.abroad?.demam?.demam.total}</p>
                  <p>
                    Positive :
                    {api?.node1?.result?.abroad?.demam?.demam.Positive}
                  </p>
                  <p>
                    Negative :
                    {api?.node1?.result?.abroad?.demam?.demam.Negative}
                  </p>
                  <p>Hasil : {api?.node1?.result?.abroad?.demam?.hasil}</p>
                  <p>
                    Gain Rasio :{api?.node1?.result?.abroad?.demam?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :{api?.node1?.result?.abroad?.demam?.tidakDemam.total}
                  </p>
                  <p>
                    Positive :
                    {api?.node1?.result?.abroad?.demam?.tidakDemam.Positive}
                  </p>
                  <p>
                    Negative :
                    {api?.node1?.result?.abroad?.demam?.tidakDemam.Negative}
                  </p>
                  <p>Hasil : {api?.node1?.result?.abroad?.demam?.hasil}</p>
                  <p>
                    Gain Rasio :{api?.node1?.result?.abroad?.demam?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {api?.node1?.result?.abroad?.sakitKepala?.sakitKepala.total}
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.abroad?.sakitKepala?.sakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.abroad?.sakitKepala?.sakitKepala
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil : {api?.node1?.result?.abroad?.sakitKepala?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.abroad?.sakitKepala?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.abroad?.sakitKepala?.tidakSakitKepala
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.abroad?.sakitKepala?.tidakSakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.abroad?.sakitKepala?.tidakSakitKepala
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil : {api?.node1?.result?.abroad?.sakitKepala?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.abroad?.sakitKepala?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.abroad?.sakitTenggorokan
                        ?.sakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.abroad?.sakitTenggorokan
                        ?.sakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.abroad?.sakitTenggorokan
                        ?.sakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.abroad?.sakitTenggorokan?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.abroad?.sakitTenggorokan?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.abroad?.sakitTenggorokan
                        ?.tidakSakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.abroad?.sakitTenggorokan
                        ?.tidakSakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.abroad?.sakitTenggorokan
                        ?.tidakSakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {api?.node1?.result?.abroad?.sakitTenggorokan?.hasil}
                  </p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.abroad?.sakitTenggorokan?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {api?.node1?.result?.abroad?.sesakNafas?.sesakNafas.total}
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.abroad?.sesakNafas?.sesakNafas
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.abroad?.sesakNafas?.sesakNafas
                        .Negative
                    }
                  </p>
                  <p>Hasil : {api?.node1?.result?.abroad?.sesakNafas?.hasil}</p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.abroad?.sesakNafas?.gainRasio}
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node1?.result?.abroad?.sesakNafas?.tidakSesakNafas
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node1?.result?.abroad?.sesakNafas?.tidakSesakNafas
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node1?.result?.abroad?.sesakNafas?.tidakSesakNafas
                        .Negative
                    }
                  </p>
                  <p>Hasil : {api?.node1?.result?.abroad?.sesakNafas?.hasil}</p>
                  <p>
                    Gain Rasio :
                    {api?.node1?.result?.abroad?.sesakNafas?.gainRasio}
                  </p>
                </td>
              </tr>
              {/* node 2 */}
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Node 2
                  </p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Indikasi
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk/Tidak Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Kepala
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sakit Kepala
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sesak Nafas
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sesak Nafas
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.demam.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.demam.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.demam.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakDemam.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakDemam.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakDemam.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.demam
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.sakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.sakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.tidakSakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.tidakSakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.tidakSakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.sakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.sakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.sakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.tidakSesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.tidakSesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.tidakSesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas
                        ?.gainRasio
                    }
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.demam.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.demam.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.demam.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.tidakDemam.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.tidakDemam.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.tidakDemam.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.sakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.sakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.tidakSakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.tidakSakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.tidakSakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.sakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.sakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.sakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.tidakSesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.tidakSesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.tidakSesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node2?.result?.contactWithConfirm?.tidakBatuk
                        ?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
              </tr>
              {/* node3 */}
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Node 3
                  </p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Indikasi
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk/Tidak Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Demam/Tidak Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Kepala
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sakit Kepala
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sesak Nafas
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sesak Nafas
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.sakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.sakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.tidakSakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.tidakSakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.tidakSakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.tidakSesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.tidakSesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.tidakSesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.demam
                        ?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.sakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.sakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.tidakSakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.tidakSakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.tidakSakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.tidakSesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.tidakSesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.tidakSesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.sakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.sakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.tidakSakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.tidakSakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.tidakSakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.sakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.sakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.sakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.tidakSesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.tidakSesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.tidakSesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk?.demam
                        ?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.sakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.sakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.tidakSakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.tidakSakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.tidakSakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.sakitTenggorokan.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.sakitTenggorokan
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.sakitTenggorokan
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.tidakSakitTenggorokan
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.tidakSakitTenggorokan
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.tidakSakitTenggorokan
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sakitTenggorokan?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.tidakSesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.tidakSesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.tidakSesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node3?.result?.contactWithConfirm?.tidakBatuk
                        ?.tidakDemam?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Node 4
                  </p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Indikasi
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Result
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sesak Nafas
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sesak Nafas
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk,Demam,Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Kepala
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.sakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.sakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.gainRasio
                    }
                  </p>
                  Tidak Sakit Kepala
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.tidakSesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.tidakSesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.tidakSesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.sakitTenggorokan?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk,Demam, Tidak Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Kepala
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.gainRasio
                    }
                  </p>
                  Tidak Sakit Kepala
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.demam
                        ?.tidakSakitTenggorokan?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
              </tr>
              {/* wow */}
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk, Tidak Demam,Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Kepala
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.sakitKepala.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.sakitKepala.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.gainRasio
                    }
                  </p>
                  Tidak Sakit Kepala
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.tidakSesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.tidakSesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.tidakSesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.sakitTenggorokan?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  ></p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  contactWithConfirm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk, Tidak Demam, Tidak Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Kepala
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.gainRasio
                    }
                  </p>
                  Tidak Sakit Kepala
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sakitKepala?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.sesakNafas.total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.sesakNafas.Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.sesakNafas.Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <p>
                    Total :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas
                        .total
                    }
                  </p>
                  <p>
                    Positive :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas
                        .Positive
                    }
                  </p>
                  <p>
                    Negative :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas
                        .Negative
                    }
                  </p>
                  <p>
                    Hasil :{" "}
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.hasil
                    }
                  </p>
                  <p>
                    Gain Rasio :
                    {
                      api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                        ?.tidakSakitTenggorokan?.sesakNafas?.gainRasio
                    }
                  </p>
                </td>
              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <p
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Node 5
                  </p>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Indikasi
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Batuk
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Demam/Tidak Demam
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Kepala/Tidak Sakit Kepala
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sakit Tenggorokan/Tidak Sakit Tenggorokan
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Sesak Nafas
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Tidak Sesak Nafas
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
