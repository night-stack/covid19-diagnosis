const Root = ({ color, api = null }) => {
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
            Root
          </p>
        </th>
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
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          contactWithConfirm
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          other
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          abroad
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
          <p>Total :{api?.root?.result?.batuk?.batuk?.total}</p>
          <p>Positive :{api?.root?.result?.batuk?.batuk?.Positive}</p>
          <p>Negative :{api?.root?.result?.batuk?.batuk?.Negative}</p>
          <p>Hasil : {api?.root?.result?.batuk?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.batuk?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.root?.result?.batuk?.tidakBatuk?.total}</p>
          <p>Positive :{api?.root?.result?.batuk?.tidakBatuk?.Positive}</p>
          <p>Negative :{api?.root?.result?.batuk?.tidakBatuk?.Negative}</p>
          <p>Hasil : {api?.root?.result?.batuk?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.batuk?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.root?.result?.demam?.demam?.total}</p>
          <p>Positive :{api?.root?.result?.demam?.demam?.Positive}</p>
          <p>Negative :{api?.root?.result?.demam?.demam?.Negative}</p>
          <p>Hasil : {api?.root?.result?.demam?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.demam?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.root?.result?.demam?.tidakdemam?.total}</p>
          <p>Positive :{api?.root?.result?.demam?.tidakdemam?.Positive}</p>
          <p>Negative :{api?.root?.result?.demam?.tidakdemam?.Negative}</p>
          <p>Hasil : {api?.root?.result?.demam?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.demam?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.root?.result?.sakitKepala?.sakitKepala?.total}</p>
          <p>
            Positive :{api?.root?.result?.sakitKepala?.sakitKepala?.Positive}
          </p>
          <p>
            Negative :{api?.root?.result?.sakitKepala?.sakitKepala?.Negative}
          </p>
          <p>Hasil : {api?.root?.result?.sakitKepala?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.sakitKepala?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :{api?.root?.result?.sakitKepala?.tidakSakitKepala?.total}
          </p>
          <p>
            Positive :
            {api?.root?.result?.sakitKepala?.tidakSakitKepala?.Positive}
          </p>
          <p>
            Negative :
            {api?.root?.result?.sakitKepala?.tidakSakitKepala?.Negative}
          </p>
          <p>Hasil : {api?.root?.result?.sakitKepala?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.sakitKepala?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {api?.root?.result?.sakitTenggorokan?.sakitTenggorokan?.total}
          </p>
          <p>
            Positive :
            {api?.root?.result?.sakitTenggorokan?.sakitTenggorokan?.Positive}
          </p>
          <p>
            Negative :
            {api?.root?.result?.sakitTenggorokan?.sakitTenggorokan?.Negative}
          </p>
          <p>Hasil : {api?.root?.result?.sakitTenggorokan?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.sakitTenggorokan?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :
            {api?.root?.result?.sakitTenggorokan?.tidaksakitTenggorokan?.total}
          </p>
          <p>
            Positive :
            {
              api?.root?.result?.sakitTenggorokan?.tidaksakitTenggorokan
                ?.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.root?.result?.sakitTenggorokan?.tidaksakitTenggorokan
                ?.Negative
            }
          </p>
          <p>Hasil : {api?.root?.result?.sakitTenggorokan?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.sakitTenggorokan?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.root?.result?.sesakNafas?.sesakNafas?.total}</p>
          <p>Positive :{api?.root?.result?.sesakNafas?.sesakNafas?.Positive}</p>
          <p>Negative :{api?.root?.result?.sesakNafas?.sesakNafas?.Negative}</p>
          <p>Hasil : {api?.root?.result?.sesakNafas?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.sesakNafas?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.root?.result?.sesakNafas?.tidaksesakNafas?.total}</p>
          <p>
            Positive :{api?.root?.result?.sesakNafas?.tidaksesakNafas?.Positive}
          </p>
          <p>
            Negative :{api?.root?.result?.sesakNafas?.tidaksesakNafas?.Negative}
          </p>
          <p>Hasil : {api?.root?.result?.sesakNafas?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.sesakNafas?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>
            Total :{api?.root?.result?.indikasiTest?.contactWithConfirm?.total}
          </p>
          <p>
            Positive :
            {api?.root?.result?.indikasiTest?.contactWithConfirm?.Positive}
          </p>
          <p>
            Negative :
            {api?.root?.result?.indikasiTest?.contactWithConfirm?.Negative}
          </p>
          <p>Hasil : {api?.root?.result?.indikasiTest?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.indikasiTest?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.root?.result?.indikasiTest?.other?.total}</p>
          <p>Positive :{api?.root?.result?.indikasiTest?.other?.Positive}</p>
          <p>Negative :{api?.root?.result?.indikasiTest?.other?.Negative}</p>
          <p>Hasil : {api?.root?.result?.indikasiTest?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.indikasiTest?.gainRasio}</p>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <p>Total :{api?.root?.result?.indikasiTest?.abroad?.total}</p>
          <p>Positive :{api?.root?.result?.indikasiTest?.abroad?.Positive}</p>
          <p>Negative :{api?.root?.result?.indikasiTest?.abroad?.Negative}</p>
          <p>Hasil : {api?.root?.result?.indikasiTest?.hasil}</p>
          <p>Gain Rasio :{api?.root?.result?.indikasiTest?.gainRasio}</p>
        </td>
      </tr>
    </>
  );
};

export default Root;
