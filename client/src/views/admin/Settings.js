import React from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Settings() {
  const [user, setUser] = React.useState([]);
  const data = localStorage.getItem("authUser");
  const history = useHistory();

  React.useEffect(() => {
    if (data) {
      const authUser = JSON.parse(data);
      if (authUser.role !== "admin") {
        history.push("/auth/admin/login");
      } else {
        Axios.get(`http://localhost:3001/api/admin/${authUser.id_admin}`).then(
          (response) => {
            response.data.forEach((item) => {
              setUser({ ...item });
            });
          }
        );
      }
    } else {
      history.push("/auth/admin/login");
    }
  }, [data, history]);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings user={user} />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile user={user} />
        </div>
      </div>
    </>
  );
}
