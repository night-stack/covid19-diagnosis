import React from "react";
import { DateTimeHelper } from "../../helpers";
import Axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormPassword from "../../views/modal/passwordForm";

const INITIAL_FORM = {
  id: "",
  name: "",
  gender: "",
  place: "",
  date: new Date(),
  address: "",
  email: "",
  phone: "",
  editPassword: false,
  proses: false,
  user: null,
};

export default function CardSettings({ user = null }) {
  const [formData, setFormData] = React.useState(INITIAL_FORM);

  React.useEffect(() => {
    const loadItem = () => {
      if (user.nomor_hp) {
        setFormData((prevState) => ({
          ...prevState,
          phone: user.nomor_hp,
          gender: user.jenis_kelamin,
          place: user.tempat_lahir,
          date: new Date(
            DateTimeHelper.getFormatedDate(user.tanggal_lahir, "YYYY-MM-DD")
          ),
          address: user.alamat,
        }));
      }
      setFormData((prevState) => ({
        ...prevState,
        id: user.id_admin,
        name: user.nama_admin,
        email: user.email,
      }));
    };

    if (user !== null) {
      // const phoneNumber = `0${address.phone.slice(3)}`;
      loadItem();
    }
  }, [user]);

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeDate = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      date: date,
    }));
  };

  const onChangeSelect = (event) => {
    const { target } = event;
    const { value } = target;

    setFormData((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };

  const submit = async () => {
    setFormData((prevState) => ({
      ...prevState,
      proses: true,
    }));
    Axios.put(`http://localhost:3001/api/admin/edit/${formData.id}`, {
      name: formData.name,
      email: formData.email,
      gender: formData.gender,
      place: formData.place,
      address: formData.address,
      date: DateTimeHelper.getFormatedDate(
        formData.date,
        "YYYY-MM-DD HH:mm:ss"
      ),
      phone: formData.phone,
    }).then(() => {
      toast.success("Data admin berhasil dirubah");
      setFormData((prevState) => ({
        ...prevState,
        proses: false,
      }));
      // window.location.reload();
    });
  };

  const onSavePassword = async (formData) => {
    Axios.post("http://localhost:3001/api/auth/admin/change-password", {
      id: formData.id,
      password: formData.password,
    }).then(() => {
      toast.success("Password berhasil dirubah");
      window.location.reload();
    });
  };

  const onToggleEditPasswordMode = (user) => {
    setFormData((prevState) => ({
      ...prevState,
      editPassword: true,
      user,
    }));
  };

  const clearForm = () => {
    setFormData((prevState) => ({
      ...prevState,
      editPassword: false,
      proses: false,
      user: null,
    }));
  };

  return (
    <>
      <FormPassword
        user={formData.user}
        onSave={onSavePassword}
        onCloseModal={clearForm}
        clearForm={clearForm}
        proses={formData.proses}
        open={formData.editPassword}
      />
      <ToastContainer position="top-center" />
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => onToggleEditPasswordMode(user)}
            >
              Change Password
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={submit}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Nama
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="phone"
                  >
                    No. Hp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="gender"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    id="gender"
                    onChange={onChangeSelect}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.gender}
                  >
                    <option>- Pilih Gender -</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Tempat Lahir
                  </label>
                  <input
                    id="place"
                    name="place"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.place}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Tanggal Lahir
                  </label>
                  <DatePicker
                    selected={formData.date}
                    dateFormat="MMMM d, yyyy"
                    onChange={handleChangeDate}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="address"
                  >
                    Alamat
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={formData.address}
                    rows="4"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              className="mt-6 bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Ubah
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
