const Node2 = ({ color, api }) => {
  <>
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
          {api?.node2?.result?.contactWithConfirm?.batuk?.demam?.demam.total}
        </p>
        <p>
          Positive :
          {api?.node2?.result?.contactWithConfirm?.batuk?.demam?.demam.Positive}
        </p>
        <p>
          Negative :
          {api?.node2?.result?.contactWithConfirm?.batuk?.demam?.demam.Negative}
        </p>
        <p>
          Hasil : {api?.node2?.result?.contactWithConfirm?.batuk?.demam?.hasil}
        </p>
        <p>
          Gain Rasio :
          {api?.node2?.result?.contactWithConfirm?.batuk?.demam?.gainRasio}
        </p>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <p>
          Total :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.demam?.tidakDemam
              .total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.demam?.tidakDemam
              .Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.demam?.tidakDemam
              .Negative
          }
        </p>
        <p>
          Hasil : {api?.node2?.result?.contactWithConfirm?.batuk?.demam?.hasil}
        </p>
        <p>
          Gain Rasio :
          {api?.node2?.result?.contactWithConfirm?.batuk?.demam?.gainRasio}
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
          {api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala?.hasil}
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
          {api?.node2?.result?.contactWithConfirm?.batuk?.sakitKepala?.hasil}
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
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.sakitTenggorokan.total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.sakitTenggorokan.Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.sakitTenggorokan.Negative
          }
        </p>
        <p>
          Hasil :{" "}
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.hasil
          }
        </p>
        <p>
          Gain Rasio :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.gainRasio
          }
        </p>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <p>
          Total :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.tidakSakitTenggorokan.total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.tidakSakitTenggorokan.Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.tidakSakitTenggorokan.Negative
          }
        </p>
        <p>
          Hasil :{" "}
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.hasil
          }
        </p>
        <p>
          Gain Rasio :
          {
            api?.node2?.result?.contactWithConfirm?.batuk?.sakitTenggorokan
              ?.gainRasio
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
          {api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas?.hasil}
        </p>
        <p>
          Gain Rasio :
          {api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas?.gainRasio}
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
          {api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas?.hasil}
        </p>
        <p>
          Gain Rasio :
          {api?.node2?.result?.contactWithConfirm?.batuk?.sesakNafas?.gainRasio}
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
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam?.demam
              .total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam?.demam
              .Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam?.demam
              .Negative
          }
        </p>
        <p>
          Hasil :{" "}
          {api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam?.hasil}
        </p>
        <p>
          Gain Rasio :
          {api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam?.gainRasio}
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
          {api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam?.hasil}
        </p>
        <p>
          Gain Rasio :
          {api?.node2?.result?.contactWithConfirm?.tidakBatuk?.demam?.gainRasio}
        </p>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <p>
          Total :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.sakitKepala.total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.sakitKepala.Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.sakitKepala.Negative
          }
        </p>
        <p>
          Hasil :{" "}
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.hasil
          }
        </p>
        <p>
          Gain Rasio :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.gainRasio
          }
        </p>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <p>
          Total :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.tidakSakitKepala.total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.tidakSakitKepala.Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.tidakSakitKepala.Negative
          }
        </p>
        <p>
          Hasil :{" "}
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.hasil
          }
        </p>
        <p>
          Gain Rasio :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitKepala
              ?.gainRasio
          }
        </p>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <p>
          Total :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.sakitTenggorokan.total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.sakitTenggorokan.Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.sakitTenggorokan.Negative
          }
        </p>
        <p>
          Hasil :{" "}
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.hasil
          }
        </p>
        <p>
          Gain Rasio :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.gainRasio
          }
        </p>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <p>
          Total :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.tidakSakitTenggorokan.total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.tidakSakitTenggorokan.Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.tidakSakitTenggorokan.Negative
          }
        </p>
        <p>
          Hasil :{" "}
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.hasil
          }
        </p>
        <p>
          Gain Rasio :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sakitTenggorokan
              ?.gainRasio
          }
        </p>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <p>
          Total :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.sesakNafas.total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.sesakNafas.Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.sesakNafas.Negative
          }
        </p>
        <p>
          Hasil :{" "}
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.hasil
          }
        </p>
        <p>
          Gain Rasio :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.gainRasio
          }
        </p>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <p>
          Total :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.tidakSesakNafas.total
          }
        </p>
        <p>
          Positive :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.tidakSesakNafas.Positive
          }
        </p>
        <p>
          Negative :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.tidakSesakNafas.Negative
          }
        </p>
        <p>
          Hasil :{" "}
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.hasil
          }
        </p>
        <p>
          Gain Rasio :
          {
            api?.node2?.result?.contactWithConfirm?.tidakBatuk?.sesakNafas
              ?.gainRasio
          }
        </p>
      </td>
    </tr>
  </>;
};

export default Node2;
