const Node4 = ({ color, api = null }) => {
  return (
    <>
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
                ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.demam
                ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala.Negative
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
                ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.demam
                ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala.Negative
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
                ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.demam
                ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.demam
                ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala.Negative
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
                ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.demam
                ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.demam
                ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas.Negative
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
                ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.sakitTenggorokan?.sakitKepala?.tidakSakitKepala.Negative
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
                ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitTenggorokan?.sakitKepala?.sakitKepala.Negative
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
                ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitTenggorokan?.sakitKepala?.tidakSakitKepala.Negative
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
                ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas.Negative
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
    </>
  );
};

export default Node4;
