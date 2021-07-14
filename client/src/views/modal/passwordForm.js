import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import PropTypes from "prop-types";

import "react-responsive-modal/styles.css";

const FORM_INITIAL = {
  id: "",
  password: "",
  retype: "",
};

const FormPassword = ({
  open,
  onCloseModal,
  proses,
  onSave,
  user,
  clearForm,
}) => {
  const [formData, setFormData] = useState(FORM_INITIAL);

  useEffect(() => {
    const loadItem = () => {
      setFormData((prevState) => ({
        ...prevState,
        id: user.id_member ? user.id_member : user.id_admin,
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
            <div className="text-lg">Ubah Password</div>
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
                <button
                  type="button"
                  onClick={onClear}
                  className="w-3/12 bg-red-500 hover:bg-red-700 text-white py-2 px-3 rounded text-sm"
                >
                  Batal
                </button>

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
                    className="w-3/12 bg-blueGray-800 hover:bg-blueGray-600 text-white py-2 px-3 rounded ml-2 text-sm"
                    disabled={formData.password !== formData.retype}
                  >
                    Simpan
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

FormPassword.propTypes = {
  user: PropTypes.instanceOf(Object),
  proses: PropTypes.bool,
  open: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
FormPassword.defaultProps = {
  proses: false,
  open: false,
  user: null,
};

export default FormPassword;
