import React from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import CardPageVisits from "components/Cards/CardPageVisits.js";

export default function Dashboard() {
  // const [user, setUser] = React.useState(null);
  const [lastUser, setLastUser] = React.useState([]);

  const history = useHistory();
  const data = localStorage.getItem("authUser");

  React.useEffect(() => {
    if (data) {
      const authUser = JSON.parse(data);
      if (authUser.role !== "admin") {
        history.push("/auth/admin/login");
      } else {
        Axios.get("http://localhost:3001/api/dashboard").then((response) => {
          setLastUser(response.data);
        });
        // setUser(authUser);
      }
    } else {
      history.push("/auth/admin/login");
    }
  }, [data, history]);

  return (
    <>
      <div className="flex flex-wrap">
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div> */}
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <CardPageVisits users={lastUser} />
        </div>
        {/* <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div> */}
      </div>
    </>
  );
}
