import React from "react";
import { useHistory } from "react-router-dom";

import DataTable from "react-data-table-component";
import memoize from "memoize-one";
// import CardTable from "components/Cards/CardTable.js";
import Axios from "axios";
// import FormMember from "../modal/memberForm";
// import FormPasswordMember from "../modal/passwordForm";
import CardTable from "components/Cards/CardTable.js";
import { ToastContainer, toast } from "react-toastify";
import { HttpGetHelper } from "../../helpers";
import FormDataset from "views/modal/datasetForm";

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

export default function Testing() {
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
          "http://localhost:3002/diagnosis",
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
      Axios.post("http://localhost:3002/diagnosis/add", {
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
    });
  };

  const btnMode = () => {
    setHandle((prevState) => ({ ...prevState, addMode: !handle.addMode }));
  };

  const onCloseModal = () => {
    clearForm();
  };

  const calculate = async () => {
    const httpResponse = await HttpGetHelper.getData(
      "http://localhost:8080/home/test?db=true",
      {}
    );
    if (httpResponse) {
      setApi(httpResponse);
    }
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
              Kalkulasi
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
              placeholder="Cari nama"
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
            <CardTable color="dark" api={api} />
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
