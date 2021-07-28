import { useState } from "react";
import { Modal } from "react-responsive-modal";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";
import "react-responsive-modal/styles.css";

const FORM_INITIAL = {
  id: "",
  batuk: false,
  indikasi: "",
  demam: false,
  sakitTenggorokan: false,
  sakitKepala: false,
  sesakNafas: false,
  result: "",
};

const FormDataset = ({
  open,
  onCloseModal,
  editMode,
  proses,
  onSave,
  user,
  clearForm,
}) => {
  const [formData, setFormData] = useState(FORM_INITIAL);

  //   useEffect(() => {
  //     const loadItem = () => {
  //       if (user.nomor_hp) {
  //         setFormData((prevState) => ({
  //           ...prevState,
  //           phone: user.nomor_hp,
  //           gender: user.jenis_kelamin,
  //           place: user.tempat_lahir,
  //           date: new Date(
  //             DateTimeHelper.getFormatedDate(user.tanggal_lahir, "YYYY-MM-DD")
  //           ),
  //           address: user.alamat,
  //           status: user.status,
  //         }));
  //       }
  //       setFormData((prevState) => ({
  //         ...prevState,
  //         id: user.id_member,
  //         name: user.nama_member,
  //         email: user.email,
  //       }));
  //     };

  //     if (user !== null) {
  //       // const phoneNumber = `0${address.phone.slice(3)}`;
  //       loadItem();
  //     }
  //   }, [user]);

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
      indikasi: value,
    }));
  };

  const radioChange = (id, answer) => {
    if (id === "batuk") {
      setFormData((prevState) => ({
        ...prevState,
        batuk: answer,
      }));
    } else if (id === "demam") {
      setFormData((prevState) => ({
        ...prevState,
        demam: answer,
      }));
    } else if (id === "sakitTenggorokan") {
      setFormData((prevState) => ({
        ...prevState,
        sakitTenggorokan: answer,
      }));
    } else if (id === "sakitKepala") {
      setFormData((prevState) => ({
        ...prevState,
        sakitKepala: answer,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        sesakNafas: answer,
      }));
    }
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
              {editMode ? `Ubah Member` : `Tambah Dataset`}
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
                  htmlFor="gender"
                >
                  Indikasi
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
                  <option>- Pilih Indikasi -</option>
                  <option value="contactWithConfirm">
                    Contact with confirmed
                  </option>
                  <option value="other">Other</option>
                  <option value="abroad">Abroad</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="phone"
                >
                  Batuk
                </label>
              </div>
              <div className="md:w-2/3">
                <div>
                  <input
                    type="radio"
                    name="batuk"
                    id="batuk-1"
                    checked={formData.batuk === true}
                    onChange={() => radioChange("batuk", true)}
                  />
                  <label
                    htmlFor={`batuk-1`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Ya
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="batuk"
                    id={`batuk-0`}
                    checked={formData.batuk === false}
                    onChange={() => radioChange("batuk", false)}
                  />
                  <label
                    htmlFor={`batuk-0`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Tidak
                  </label>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="phone"
                >
                  Demam
                </label>
              </div>
              <div className="md:w-2/3">
                <div>
                  <input
                    type="radio"
                    name="demam"
                    id="demam-1"
                    checked={formData.demam === true}
                    onChange={() => radioChange("demam", true)}
                  />
                  <label
                    htmlFor={`demam-1`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Ya
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="demam"
                    id={`demam-0`}
                    checked={formData.demam === false}
                    onChange={() => radioChange("demam", false)}
                  />
                  <label
                    htmlFor={`demam-0`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Tidak
                  </label>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="phone"
                >
                  Sakit Tenggorokan
                </label>
              </div>
              <div className="md:w-2/3">
                <div>
                  <input
                    type="radio"
                    name="sakitTenggorokan"
                    id="sakitTenggorokan-1"
                    checked={formData.sakitTenggorokan === true}
                    onChange={() => radioChange("sakitTenggorokan", true)}
                  />
                  <label
                    htmlFor={`sakitTenggorokan-1`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Ya
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="sakitTenggorokan"
                    id={`sakitTenggorokan-0`}
                    checked={formData.sakitTenggorokan === false}
                    onChange={() => radioChange("sakitTenggorokan", false)}
                  />
                  <label
                    htmlFor={`sakitTenggorokan-0`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Tidak
                  </label>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="phone"
                >
                  Sakit Kepala
                </label>
              </div>
              <div className="md:w-2/3">
                <div>
                  <input
                    type="radio"
                    name="sakitKepala"
                    id="sakitKepala-1"
                    checked={formData.sakitKepala === true}
                    onChange={() => radioChange("sakitKepala", true)}
                  />
                  <label
                    htmlFor={`sakitKepala-1`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Ya
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="sakitKepala"
                    id={`sakitKepala-0`}
                    checked={formData.sakitKepala === false}
                    onChange={() => radioChange("sakitKepala", false)}
                  />
                  <label
                    htmlFor={`sakitKepala-0`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Tidak
                  </label>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="phone"
                >
                  Sesak Nafas
                </label>
              </div>
              <div className="md:w-2/3">
                <div>
                  <input
                    type="radio"
                    name="sesakNafas"
                    id="sesakNafas-1"
                    checked={formData.sesakNafas === true}
                    onChange={() => radioChange("sakitNafas", true)}
                  />
                  <label
                    htmlFor={`sesakNafas-1`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Ya
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="sesakNafas"
                    id={`sesakNafas-0`}
                    checked={formData.sesakNafas === false}
                    onChange={() => radioChange("sakitNafas", false)}
                  />
                  <label
                    htmlFor={`sesakNafas-0`}
                    className="ml-3 text-sm leading-relaxed text-blueGray-500"
                  >
                    Tidak
                  </label>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-right mb-1 md:mb-0 pr-4 text-sm"
                  htmlFor="email"
                >
                  Corona Result
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  id="result"
                  name="result"
                  value={formData.result}
                  onChange={handleInputChange}
                  className="text-sm appearance-none border-none w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blueGray-800"
                  placeholder=" Corona Result"
                  type="text"
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
                    disabled={
                      editMode ? formData.password !== formData.retype : false
                    }
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

FormDataset.propTypes = {
  user: PropTypes.instanceOf(Object),
  editMode: PropTypes.bool,
  proses: PropTypes.bool,
  open: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
FormDataset.defaultProps = {
  editMode: false,
  proses: false,
  open: false,
  user: null,
};

export default FormDataset;
