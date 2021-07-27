const Node5 = ({ color, api = null }) => {
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
            Node 5
          </p>
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Indikasi
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Result
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
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
          Batuk, Tidak Demam, Tidak Sakit Kepala, Sakit Tenggorokan
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Sesak Napas
          <p>
            Total :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.gainRasio
            }
          </p>
          Tidak Sesak Napas
          <p>
            Total :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.tidakSesakNafas?.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.tidakSesakNafas?.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.tidakSesakNafas?.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.sakitTenggorokan?.sesakNafas?.gainRasio
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
          Batuk, Tidak Demam, Tidak Sakit Kepala, Tidak Sakit Tenggorokan
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          Sesak Napas
          <p>
            Total :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
                ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.sesakNafas.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.sesakNafas.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.sesakNafas.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.gainRasio
            }
          </p>
          Tidak Sesak Napas
          <p>
            Total :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas?.total
            }
          </p>
          <p>
            Positive :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas?.Positive
            }
          </p>
          <p>
            Negative :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.tidakSesakNafas?.Negative
            }
          </p>
          <p>
            Hasil :{" "}
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.hasil
            }
          </p>
          <p>
            Gain Rasio :
            {
              api?.node5?.result?.contactWithConfirm?.batuk?.tidakDemam
              ?.tidakSakitKepala?.tidakSakitTenggorokan?.sesakNafas?.gainRasio
            }
          </p>
        </td>
      </tr>

    </>
  );
};

export default Node5;
