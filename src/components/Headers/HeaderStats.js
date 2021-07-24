import React from "react";
import Axios from "axios";

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  const [data, setData] = React.useState([]);
  const [dataset, setDataset] = React.useState([]);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/member").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="MEMBER"
                  statTitle={data.length}
                  statIconName="fas fa-users"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="DATASET"
                  statTitle={8005}
                  statIconName="fas fa-database"
                  statIconColor="bg-blueGray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
