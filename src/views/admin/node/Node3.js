const Node3 = ({ color, api = null }) => {
  return (
    <>
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
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.sakitKepala.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.sakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.sakitKepala.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.tidakSakitKepala.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.tidakSakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.tidakSakitKepala.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sakitKepala
                ?.gainRasio
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
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
                ?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
                ?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
                ?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
                ?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
                ?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
                ?.tidakSesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
                ?.tidakSesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
                ?.tidakSesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
                ?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.batuk?.demam?.sesakNafas
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
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.sakitKepala.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.sakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.sakitKepala.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.tidakSakitKepala.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.tidakSakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.tidakSakitKepala.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.sakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.sakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.sakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.tidakSakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitTenggorokan?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.tidakSesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.tidakSesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.tidakSesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node3?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sesakNafas?.gainRasio
            }
          </p>
        </td>
      </tr>
    </>
  );
};

export default Node3;
