import React from "react";
import PropTypes from "prop-types";
import Node1 from "../../views/admin/node/Node1";
import Node2 from "../../views/admin/node/Node2";
import Node3 from "../../views/admin/node/Node3";
import Node4 from "../../views/admin/node/Node4";
import Node5 from "../../views/admin/node/Node5";
import Root from "../../views/admin/node/Root";

// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color, api = null }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
        style={{ overflow: "auto" }}
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Perhitungan
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          {api && (
            <table className="items-center w-full bg-transparent border-collapse">
              <tbody>
                <Root color={color} api={api} />
                <Node1 color={color} api={api} />
                <Node2 color={color} api={api} />
                <Node3 color={color} api={api} />
                <Node4 color={color} api={api} />
                <Node5 color={color} api={api} />
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
