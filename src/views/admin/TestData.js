import React from "react";
import { useHistory } from "react-router-dom";

import DataTable from "react-data-table-component";
import memoize from "memoize-one";
// import CardTable from "components/Cards/CardTable.js";
import Axios from "axios";
// import FormMember from "../modal/memberForm";
// import FormPasswordMember from "../modal/passwordForm";
import TestingTable from "components/Cards/TestingTable";
import { ToastContainer, toast } from "react-toastify";
import { HttpGetHelper } from "../../helpers";
import FormDataset from "views/modal/datasetForm";
import _ from "lodash";

const columns = memoize((calculate) => [
  {
    name: "ID",
    selector: "id",
    sortable: true,
    width: "5.5rem",
  },
  {
    name: "Indikasi",
    selector: "indikasi",
    sortable: true,
  },
  {
    name: "Batuk",
    selector: "batuk",
    sortable: true,
  },
  {
    name: "Demam",
    selector: "demam",
    sortable: true,
  },
  {
    name: "Sakit Tenggorokan",
    selector: "sakitTenggorokan",
    sortable: true,
  },
  {
    name: "Sesak Nafas",
    selector: "sesakNafas",
    sortable: true,
  },
  {
    name: "Sakit Kepala",
    selector: "sakitKepala",
    sortable: true,
  },
  {
    name: "Hasil",
    selector: "result",
    sortable: true,
  },
]);

export default function TestData() {
  const [search, setSearch] = React.useState("");
  const [handle, setHandle] = React.useState({
    editMode: false,
    addMode: false,
    editPassword: false,
    user: null,
    proses: false,
  });
  const [data, setData] = React.useState([
    {
      id: 1,
      batuk: 0,
      demam: 0,
      sakitTenggorokan: 0,
      sakitKepala: 0,
      sesakNafas: 0,
      indikasi: "Other",
      result: "negatif",
    },
  ]);
  const [api, setApi] = React.useState(null);
  const [test, setTest] = React.useState({
    tp: 0,
    tn: 0,
    fp: 0,
    fn: 0,
  });
  const history = useHistory();
  const user = localStorage.getItem("authUser");
  const filteredItems = data.filter(
    (item) =>
      item.indikasi.toLowerCase() &&
      item.indikasi.toLowerCase().includes(search)
  );

  React.useEffect(() => {
    if (user) {
      const fetch = async () => {
        const httpResponse = await HttpGetHelper.getData(
          "http://localhost:3002/test-data",
          {}
        );
        if (httpResponse) {
          setData(httpResponse);
        }
      };

      fetch();
    } else {
      history.push("/auth/admin/login");
    }
  }, [user, history]);

  const onSave = async (formData) => {
    if (formData.id === "") {
      Axios.post("http://localhost:3002/test-data/add", {
        batuk: formData.batuk,
        demam: formData.demam,
        sakitTenggorokan: formData.sakitTenggorokan,
        sakitKepala: formData.sakitKepala,
        sesakNafas: formData.sesakNafas,
        indikasi: formData.indikasi,
        result: formData.result,
      }).then(() => {
        toast.success("Dataset berhasil ditambah");
        window.location.reload();
      });
    } else {
      // Axios.put(`http://localhost:3001/api/member/edit/${formData.id}`, {
      //   name: formData.name,
      //   email: formData.email,
      //   gender: formData.gender,
      //   place: formData.place,
      //   address: formData.address,
      //   date: DateTimeHelper.getFormatedDate(
      //     formData.date,
      //     "YYYY-MM-DD HH:mm:ss"
      //   ),
      //   phone: formData.phone,
      //   status: formData.status,
      // }).then(() => {
      //   toast.success("Data member berhasil dirubah");
      //   window.location.reload();
      // });
    }
  };

  const handleClear = () => {
    if (search) {
      setSearch("");
    }
  };

  const onChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const clearForm = () => {
    setHandle({
      editMode: false,
      addMode: false,
      editPassword: false,
      user: null,
      proses: false,
      api: null,
    });
  };

  const btnMode = () => {
    setHandle((prevState) => ({ ...prevState, addMode: !handle.addMode }));
  };

  const onCloseModal = () => {
    clearForm();
  };

  const calculate = async () => {
    let array = [];
    const httpResponse = await HttpGetHelper.getData(
      "http://localhost:8080/home/test?result",
      {}
    );
    if (httpResponse) {
      // eslint-disable-next-line array-callback-return
      httpResponse.map((item) => {
        const tes = item.split("= ");
        let arr = tes[0].split(",");
        array.push([arr, tes[1]]);
      });
      setApi(httpResponse);
    }

    let tesData = [];
    // eslint-disable-next-line array-callback-return
    data.map((item) => {
      let raw = [];
      if (item.indikasi === "other" || item.indikasi === "abroad") {
        raw.push(item.indikasi);
        if (item.sakitKepala) {
          raw.push("sakitKepala");
        } else {
          raw.push("tidakSakitKepala");
        }
      } else {
        if (
          item.indikasi === "Contact with confirmed" ||
          item.indikasi === "contactWithConfirm"
        ) {
          raw.push("contactWithConfirm");
        }
        if (item.batuk) {
          raw.push("batuk");
        } else {
          raw.push("tidakBatuk");
        }
        if (item.demam) {
          raw.push("demam");
          if (item.sakitKepala) {
            raw.push("sakitKepala");
            if (item.sakitTenggorokan) {
              raw.push("sakitTenggorokan");
            } else if (!item.sakitTenggorokan) {
              raw.push("tidakSakitTenggorokan");
            } else if (item.sesakNafas) {
              raw.push("sesakNafas");
            } else if (!item.sesakNafas) {
              raw.push("tidakSesakNafas");
            }
          } else {
            raw.push("tidakSakitKepala");
            if (item.sakitTenggorokan) {
              raw.push("sakitTenggorokan");
            } else if (!item.sakitTenggorokan) {
              raw.push("tidakSakitTenggorokan");
            } else if (item.sesakNafas) {
              raw.push("sesakNafas");
            } else if (!item.sesakNafas) {
              raw.push("tidakSesakNafas");
            }
          }
        } else {
          raw.push("tidakDemam");
          if (item.sakitKepala) {
            raw.push("sakitKepala");
            if (item.sakitTenggorokan) {
              raw.push("sakitTenggorokan");
            } else if (!item.sakitTenggorokan) {
              raw.push("tidakSakitTenggorokan");
            } else if (item.sesakNafas) {
              raw.push("sesakNafas");
            } else if (!item.sesakNafas) {
              raw.push("tidakSesakNafas");
            }
          } else {
            raw.push("tidakSakitKepala");
            if (item.sakitTenggorokan) {
              raw.push("sakitTenggorokan");
            } else if (!item.sakitTenggorokan) {
              raw.push("tidakSakitTenggorokan");
            } else if (item.sesakNafas) {
              raw.push("sesakNafas");
            } else if (!item.sesakNafas) {
              raw.push("tidakSesakNafas");
            }
          }
        }
        // if (item.sakitKepala) {
        //   raw.push("sakitKepala");
        // } else {
        //   raw.push("tidakSakitKepala");
        // }
        // if (item.sakitTenggorokan) {
        //   raw.push("sakitTenggorokan");
        // } else {
        //   raw.push("tidakSakitTenggorokan");
        // }
        // if (item.sesakNafas) {
        //   raw.push("sesakNafas");
        // } else {
        //   raw.push("tidakSesakNafas");
        // }
      }
      //   tesData.push(raw);
      //   if (item.id === 2000) {
      //     console.log("tesData", tesData);
      //   }
      function getIndexOfArray(arr, arr2) {
        for (var i = 0; i < arr.length; i++) {
          var equal = _.isEqual(arr[i][0].sort(), arr2);
          if (equal) {
            return i;
          }
        }
      }
      // console.log("ARRAY", array);
      // console.log("raw", raw);
      const idx = getIndexOfArray(array, raw.sort());
      //   console.log("idx", idx);

      if (idx) {
        if (array[idx][1] === "negative" && item.result === "negative") {
          setTest((prevState) => ({ ...prevState, tn: prevState.tn + 1 }));
        } else if (array[idx][1] === "positive" && item.result === "positive") {
          setTest((prevState) => ({ ...prevState, tp: prevState.tp + 1 }));
        } else {
          setTest((prevState) => ({ ...prevState, fp: prevState.fp + 1 }));
        }
      } else if (idx === undefined) {
        if (item.sesakNafas) {
          raw.push("sesakNafas");
        } else if (!item.sesakNafas) {
          raw.push("tidakSesakNafas");
        }
        const index = getIndexOfArray(array, raw.sort());
        if (index) {
          if (array[index][1] === "negative" && item.result === "negative") {
            setTest((prevState) => ({ ...prevState, tn: prevState.tn + 1 }));
          } else if (
            array[index][1] === "positive" &&
            item.result === "positive"
          ) {
            setTest((prevState) => ({ ...prevState, tp: prevState.tp + 1 }));
          } else {
            setTest((prevState) => ({ ...prevState, fp: prevState.fp + 1 }));
          }
        } else {
          setTest((prevState) => ({ ...prevState, fn: prevState.fn + 1 }));
        }
      } else {
        setTest((prevState) => ({ ...prevState, fn: prevState.fn + 1 }));
      }
    });
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 p-4" style={{ marginTop: "4rem" }}>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-lightBlue-900 text-white"></div>
          <div className="mb-3 float-right">
            <button
              type
              className="px-6 py-2 rounded text-white bg-blueGray-800 font-semibold text-sm mr-3"
              onClick={calculate}
            >
              Hitung Confusion Matrix
            </button>
            <button
              type
              className="px-6 py-2 rounded text-white bg-lightBlue-400 font-semibold text-sm"
              onClick={btnMode}
            >
              Tambah
            </button>
          </div>
          <div className="flex float-left items-center mb-8">
            <input
              name="search"
              type="text"
              placeholder="Cari indikasi"
              value={search}
              onChange={onChange}
              className="w-2/12 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring ease-linear transition-all duration-150"
            />
            <div className="flex" style={{ marginLeft: "-30px" }}>
              <button
                type="button"
                onClick={handleClear}
                className="px-3 py-3 text-white bg-red-400 font-bold"
                style={{
                  paddingBottom: ".6rem",
                  paddingTop: ".6rem",
                  marginLeft: "-2px",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                X
              </button>
            </div>
          </div>
          <DataTable
            columns={columns(calculate)}
            data={filteredItems}
            highlightOnHover
            pagination
          />
        </div>
        {api && (
          <div className="w-full mb-12 px-4">
            <TestingTable color="dark" api={test} result={api} />
          </div>
        )}
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
        <FormDataset
          user={handle.user}
          onSave={onSave}
          editMode={handle.editMode}
          onCloseModal={onCloseModal}
          clearForm={clearForm}
          proses={handle.proses}
          open={handle.addMode}
        />
        {/* <FormPasswordMember
          user={handle.user}
          onSave={onSavePassword}
          onCloseModal={onCloseModal}
          clearForm={clearForm}
          proses={handle.proses}
          open={handle.editPassword}
        /> */}
      </div>
    </>
  );
}
