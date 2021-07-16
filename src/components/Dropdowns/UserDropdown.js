import React from "react";
// import { useHistory } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const UserDropdown = () => {
  const [user, setUser] = React.useState(null);
  // const history = useHistory();
  const data = localStorage.getItem("authUser");

  React.useEffect(() => {
    if (data) {
      const authUser = JSON.parse(data);
      setUser(authUser);
    }
  }, [data]);

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      {user && (
        <a
          className="text-blueGray-500 block"
          href="#profile"
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          <div className="items-center flex">
            <span
              className="text-white mr-2 font-semibold text-sm"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: "4rem",
                textOverflow: "ellipsis",
              }}
            >
              {user && user.email}
            </span>
            <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
              <img
                alt="..."
                className="w-full rounded-full align-middle border-none shadow-lg"
                src={require("assets/img/default-image-user.png").default}
              />
            </span>
          </div>
        </a>
      )}
    </>
  );
};

export default UserDropdown;
