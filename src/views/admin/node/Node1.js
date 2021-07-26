const Node1 = ({ color, api = null }) => {
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
            Total :{api?.node1?.result?.contactWithConfirm?.batuk?.batuk.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.contactWithConfirm?.batuk?.batuk.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.contactWithConfirm?.batuk?.batuk.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.contactWithConfirm?.batuk?.hasil}</p>
          <p>
            Gain Rasio :
            {api?.node1?.result?.contactWithConfirm?.batuk?.gainRasio}
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {api?.node1?.result?.contactWithConfirm?.batuk?.tidakBatuk.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.contactWithConfirm?.batuk?.tidakBatuk.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.contactWithConfirm?.batuk?.tidakBatuk.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.contactWithConfirm?.batuk?.hasil}</p>
          <p>
            Gain Rasio :
            {api?.node1?.result?.contactWithConfirm?.batuk?.gainRasio}
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :{api?.node1?.result?.contactWithConfirm?.demam?.demam.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.contactWithConfirm?.demam?.demam.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.contactWithConfirm?.demam?.demam.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.contactWithConfirm?.demam?.hasil}</p>
          <p>
            Gain Rasio :
            {api?.node1?.result?.contactWithConfirm?.demam?.gainRasio}
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {api?.node1?.result?.contactWithConfirm?.demam?.tidakDemam.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.contactWithConfirm?.demam?.tidakDemam.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.contactWithConfirm?.demam?.tidakDemam.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.contactWithConfirm?.demam?.hasil}</p>
          <p>
            Gain Rasio :
            {api?.node1?.result?.contactWithConfirm?.demam?.gainRasio}
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node1?.result?.contactWithConfirm?.sakitKepala?.sakitKepala
                .total
            }
          </p>
          <p>
            Positive :
            {
              api?.node1?.result?.contactWithConfirm?.sakitKepala?.sakitKepala
                .Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node1?.result?.contactWithConfirm?.sakitKepala?.sakitKepala
                .Negative
            }
          </p>
          <p>
            Hasil : {api?.node1?.result?.contactWithConfirm?.sakitKepala?.hasil}
          </p>
          <p>
            Gain Rasio :
            {api?.node1?.result?.contactWithConfirm?.sakitKepala?.gainRasio}
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
            Hasil : {api?.node1?.result?.contactWithConfirm?.sakitKepala?.hasil}
          </p>
          <p>
            Gain Rasio :
            {api?.node1?.result?.contactWithConfirm?.sakitKepala?.gainRasio}
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
            {api?.node1?.result?.contactWithConfirm?.sakitTenggorokan?.hasil}
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
            {api?.node1?.result?.contactWithConfirm?.sakitTenggorokan?.hasil}
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
              api?.node1?.result?.contactWithConfirm?.sesakNafas?.sesakNafas
                .total
            }
          </p>
          <p>
            Positive :
            {
              api?.node1?.result?.contactWithConfirm?.sesakNafas?.sesakNafas
                .Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node1?.result?.contactWithConfirm?.sesakNafas?.sesakNafas
                .Negative
            }
          </p>
          <p>
            Hasil : {api?.node1?.result?.contactWithConfirm?.sesakNafas?.hasil}
          </p>
          <p>
            Gain Rasio :
            {api?.node1?.result?.contactWithConfirm?.sesakNafas?.gainRasio}
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
            Hasil : {api?.node1?.result?.contactWithConfirm?.sesakNafas?.hasil}
          </p>
          <p>
            Gain Rasio :
            {api?.node1?.result?.contactWithConfirm?.sesakNafas?.gainRasio}
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
          <p>Positive :{api?.node1?.result?.other?.batuk?.batuk.Positive}</p>
          <p>Negative :{api?.node1?.result?.other?.batuk?.batuk.Negative}</p>
          <p>Hasil : {api?.node1?.result?.other?.batuk?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.other?.batuk?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.node1?.result?.other?.batuk?.tidakBatuk.total}</p>
          <p>
            Positive :{api?.node1?.result?.other?.batuk?.tidakBatuk.Positive}
          </p>
          <p>
            Negative :{api?.node1?.result?.other?.batuk?.tidakBatuk.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.other?.batuk?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.other?.batuk?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.node1?.result?.other?.demam?.demam.total}</p>
          <p>Positive :{api?.node1?.result?.other?.demam?.demam.Positive}</p>
          <p>Negative :{api?.node1?.result?.other?.demam?.demam.Negative}</p>
          <p>Hasil : {api?.node1?.result?.other?.demam?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.other?.demam?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.node1?.result?.other?.demam?.tidakDemam.total}</p>
          <p>
            Positive :{api?.node1?.result?.other?.demam?.tidakDemam.Positive}
          </p>
          <p>
            Negative :{api?.node1?.result?.other?.demam?.tidakDemam.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.other?.demam?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.other?.demam?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :{api?.node1?.result?.other?.sakitKepala?.sakitKepala.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.other?.sakitKepala?.sakitKepala.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.other?.sakitKepala?.sakitKepala.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.other?.sakitKepala?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.other?.sakitKepala?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {api?.node1?.result?.other?.sakitKepala?.tidakSakitKepala.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.other?.sakitKepala?.tidakSakitKepala.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.other?.sakitKepala?.tidakSakitKepala.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.other?.sakitKepala?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.other?.sakitKepala?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node1?.result?.other?.sakitTenggorokan?.sakitTenggorokan
                .total
            }
          </p>
          <p>
            Positive :
            {
              api?.node1?.result?.other?.sakitTenggorokan?.sakitTenggorokan
                .Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node1?.result?.other?.sakitTenggorokan?.sakitTenggorokan
                .Negative
            }
          </p>
          <p>Hasil : {api?.node1?.result?.other?.sakitTenggorokan?.hasil}</p>
          <p>
            Gain Rasio :{api?.node1?.result?.other?.sakitTenggorokan?.gainRasio}
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node1?.result?.other?.sakitTenggorokan?.tidakSakitTenggorokan
                .total
            }
          </p>
          <p>
            Positive :
            {
              api?.node1?.result?.other?.sakitTenggorokan?.tidakSakitTenggorokan
                .Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node1?.result?.other?.sakitTenggorokan?.tidakSakitTenggorokan
                .Negative
            }
          </p>
          <p>Hasil : {api?.node1?.result?.other?.sakitTenggorokan?.hasil}</p>
          <p>
            Gain Rasio :{api?.node1?.result?.other?.sakitTenggorokan?.gainRasio}
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :{api?.node1?.result?.other?.sesakNafas?.sesakNafas.total}
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
          <p>Gain Rasio :{api?.node1?.result?.other?.sesakNafas?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {api?.node1?.result?.other?.sesakNafas?.tidakSesakNafas.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.other?.sesakNafas?.tidakSesakNafas.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.other?.sesakNafas?.tidakSesakNafas.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.other?.sesakNafas?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.other?.sesakNafas?.gainRasio}</p>
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
          <p>Positive :{api?.node1?.result?.abroad?.batuk?.batuk.Positive}</p>
          <p>Negative :{api?.node1?.result?.abroad?.batuk?.batuk.Negative}</p>
          <p>Hasil : {api?.node1?.result?.abroad?.batuk?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.abroad?.batuk?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.node1?.result?.abroad?.batuk?.tidakBatuk.total}</p>
          <p>
            Positive :{api?.node1?.result?.abroad?.batuk?.tidakBatuk.Positive}
          </p>
          <p>
            Negative :{api?.node1?.result?.abroad?.batuk?.tidakBatuk.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.abroad?.batuk?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.abroad?.batuk?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.node1?.result?.abroad?.demam?.demam.total}</p>
          <p>Positive :{api?.node1?.result?.abroad?.demam?.demam.Positive}</p>
          <p>Negative :{api?.node1?.result?.abroad?.demam?.demam.Negative}</p>
          <p>Hasil : {api?.node1?.result?.abroad?.demam?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.abroad?.demam?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.node1?.result?.abroad?.demam?.tidakDemam.total}</p>
          <p>
            Positive :{api?.node1?.result?.abroad?.demam?.tidakDemam.Positive}
          </p>
          <p>
            Negative :{api?.node1?.result?.abroad?.demam?.tidakDemam.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.abroad?.demam?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.abroad?.demam?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :{api?.node1?.result?.abroad?.sakitKepala?.sakitKepala.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.abroad?.sakitKepala?.sakitKepala.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.abroad?.sakitKepala?.sakitKepala.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.abroad?.sakitKepala?.hasil}</p>
          <p>
            Gain Rasio :{api?.node1?.result?.abroad?.sakitKepala?.gainRasio}
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {api?.node1?.result?.abroad?.sakitKepala?.tidakSakitKepala.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.abroad?.sakitKepala?.tidakSakitKepala.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.abroad?.sakitKepala?.tidakSakitKepala.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.abroad?.sakitKepala?.hasil}</p>
          <p>
            Gain Rasio :{api?.node1?.result?.abroad?.sakitKepala?.gainRasio}
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {
              api?.node1?.result?.abroad?.sakitTenggorokan?.sakitTenggorokan
                .total
            }
          </p>
          <p>
            Positive :
            {
              api?.node1?.result?.abroad?.sakitTenggorokan?.sakitTenggorokan
                .Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node1?.result?.abroad?.sakitTenggorokan?.sakitTenggorokan
                .Negative
            }
          </p>
          <p>Hasil : {api?.node1?.result?.abroad?.sakitTenggorokan?.hasil}</p>
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
          <p>Hasil : {api?.node1?.result?.abroad?.sakitTenggorokan?.hasil}</p>
          <p>
            Gain Rasio :
            {api?.node1?.result?.abroad?.sakitTenggorokan?.gainRasio}
          </p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :{api?.node1?.result?.abroad?.sesakNafas?.sesakNafas.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.abroad?.sesakNafas?.sesakNafas.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.abroad?.sesakNafas?.sesakNafas.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.abroad?.sesakNafas?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.abroad?.sesakNafas?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {api?.node1?.result?.abroad?.sesakNafas?.tidakSesakNafas.total}
          </p>
          <p>
            Positive :
            {api?.node1?.result?.abroad?.sesakNafas?.tidakSesakNafas.Positive}
          </p>
          <p>
            Negative :
            {api?.node1?.result?.abroad?.sesakNafas?.tidakSesakNafas.Negative}
          </p>
          <p>Hasil : {api?.node1?.result?.abroad?.sesakNafas?.hasil}</p>
          <p>Gain Rasio :{api?.node1?.result?.abroad?.sesakNafas?.gainRasio}</p>
        </td>
      </tr>
    </>
  );
};

export default Node1;
