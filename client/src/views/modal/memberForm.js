import { useEffect, useState } from "react";
import { DateTimeHelper } from "../../helpers";
import { Modal } from "react-responsive-modal";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-responsive-modal/styles.css";

const FORM_INITIAL = {
  id: "",
  name: "",
  password: "",
  retype: "",
  phone: "",
  gender: "",
  place: "",
  date: new Date(),
  address: "",
  email: "",
  status: "Terverifikasi",
};

const FormMember = ({
  open,
  onCloseModal,
  editMode,
  proses,
  onSave,
  user,
  clearForm,
}) => {
  const [formData, setFormData] = useState(FORM_INITIAL);

  useEffect(() => {
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
          status: user.status,
        }));
      }
      setFormData((prevState) => ({
        ...prevState,
        id: user.id_member,
        name: user.nama_member,
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

  const onSubmit = (event) => {
    onSave(formData).then(() => {
      setFormData(FORM_INITIAL);
    });

    event.preventDefault();
  };

  const onClear = () => {
    setFormData(FORM_INITIAL);
    clearForm();
    onCloseModal();
  };

  const onChangeSelect = (event) => {
    const { target } = event;
    const { value } = target;

    setFormData((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };

  const handleChangeDate = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      date: date,
    }));
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      center
      showCloseIcon={false}
      classNames={{ modal: `rounded` }}
      styles={{ modal: { padding: 0 } }}
    >
      <div className="w-120">
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-300">
            <div className="text-lg">
              {editMode ? `Ubah Member` : `Tambah Member`}
            </div>
            <button
              type="button"
              className="py-1 px-2 text-blueGray-500"
              style={{ borderStyle: "none" }}
              onClick={onClear}
            >
              &times;
            </button>
          </div>

          <form className="mt-5" onSubmit={onSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="name"
                >
                  Nama
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="text-sm appearance-none border-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  placeholder=" Nama"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="phone"
                >
                  No. Hp
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="text-sm appearance-none border-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  placeholder=" No. Hp"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="text-sm appearance-none border-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  placeholder=" Email"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3 pr-4">
                <input
                  id="place"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  className="w-full text-sm appearance-none border-none text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  placeholder="Tempat Lahir"
                  type="text"
                  required
                />
              </div>
              <div className="md:w-2/3">
                <DatePicker
                  selected={formData.date}
                  dateFormat="MMMM d, yyyy"
                  onChange={handleChangeDate}
                  className="text-sm appearance-none border-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="bank"
                >
                  Jenis Kelamin
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  id="gender"
                  onChange={onChangeSelect}
                  className="text-sm appearance-none border-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  value={formData.gender}
                  required
                >
                  <option>- Pilih Gender -</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="address"
                >
                  Alamat
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="text-sm appearance-none border-gray-400 w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  placeholder=" Alamat"
                  rows="9"
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="text-sm appearance-none border-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  placeholder=" Password"
                  type="password"
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="retype"
                >
                  Retype Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="retype"
                  name="retype"
                  value={formData.retype}
                  onChange={handleInputChange}
                  className="text-sm appearance-none border-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  placeholder=" Retype Password"
                  type="password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-4 rounded-b border-t border-gray-300">
              <div className="w-full text-right">
                {editMode ? (
                  <button
                    type="button"
                    onClick={onClear}
                    className="w-3/12 bg-red-500 hover:bg-red-700 text-white py-2 px-3 rounded text-sm"
                  >
                    Batal
                  </button>
                ) : null}
                {proses ? (
                  <button
                    type="button"
                    className="bg-white-500 hover:bg-white-700 text-black w-3/12 py-2 rounded text-sm"
                  >
                    Proses
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={
                      editMode
                        ? "w-3/12 bg-blueGray-800 hover:bg-blueGray-600 text-white py-2 px-3 rounded ml-2 text-sm"
                        : "w-3/12 bg-blueGray-800 hover:bg-blueGray-600 text-white py-2 px-3 rounded text-sm"
                    }
                    disabled={formData.password !== formData.retype}
                  >
                    {editMode ? "Simpan" : "Tambah"}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

FormMember.propTypes = {
  user: PropTypes.instanceOf(Object),
  editMode: PropTypes.bool,
  proses: PropTypes.bool,
  open: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
FormMember.defaultProps = {
  editMode: false,
  proses: false,
  open: false,
  user: null,
};

export default FormMember;
