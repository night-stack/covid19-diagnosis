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
          Batuk, Tidak Demam, Sakit Kepala
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.sakitKepala?.sakitTenggorokan?.sakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.sakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.sakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
          Tidak Sakit Tenggorokan
          <p>
            Total :
            {
             api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
             ?.sakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.sakitKepala?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
             api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
             ?.sakitKepala?.sesakNafas?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.tidakSesakNafas?.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.tidakSesakNafas?.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.tidakSesakNafas?.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
             api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
             ?.sakitKepala?.sesakNafas?.gainRasio
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
          Batuk, Tidak Demam, Tidak Sakit Kepala
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
          Tidak Sakit Tenggorokan
          <p>
            Total :
            {
             api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
             ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitKepala?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
             api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
             ?.tidakSakitKepala?.sesakNafas?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas?.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas?.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas?.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
             api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
             ?.tidakSakitKepala?.sesakNafas?.gainRasio
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
          Batuk, Tidak Demam, Tidak Sakit Kepala
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
          Tidak Sakit Tenggorokan
          <p>
            Total :
            {
             api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
             ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitKepala?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
             api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
             ?.tidakSakitKepala?.sesakNafas?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas?.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas?.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas?.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
             api?.node4?.result?.contactWithConfirm?.batuk?.tidakDemam
             ?.tidakSakitKepala?.sesakNafas?.gainRasio
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
          Tidak Batuk, Demam, Sakit Kepala
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
                ?.sakitKepala?.sakitTenggorokan?.sakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sakitTenggorokan?.sakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sakitTenggorokan?.sakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
          Tidak Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas?.tidakSesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas?.tidakSesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas?.tidakSesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.sakitKepala?.sesakNafas.gainRasio
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
          Tidak Batuk, Demam, Tidak Sakit Kepala
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
                ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
          Tidak Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.demam
              ?.tidakSakitKepala?.sesakNafas.gainRasio
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
          Tidak Batuk, Tidak Demam, Sakit Kepala
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.sakitKepala?.sakitTenggorokan?.sakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.sakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.sakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
          Tidak Sakit Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.tidakSesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.tidakSesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.tidakSesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.sakitKepala?.sesakNafas?.gainRasio
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
          Tidak Batuk, Tidak Demam, Tidak Sakit Kepala
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
                ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
             api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
             ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
             api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
             ?.tidakSakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
             api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
             ?.tidakSakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
          Tidak Sakit Sakit Tenggorokan
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.tidakSakitTenggorokan.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.gainRasio
            }
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.tidakSesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node4?.result?.contactWithConfirm?.tidakBatuk?.tidakDemam
              ?.tidakSakitKepala?.sesakNafas?.gainRasio
            }
          </p>
        </td>
      </tr>

    </>
  );
};

export default Node4;
