import React from "react";
import Axios from "axios";

import CardStats from "components/Cards/CardStats.js";
import { HttpGetHelper } from "../../helpers";

export default function HeaderStats() {
  const [data, setData] = React.useState([]);
  const [dataset, setDataset] = React.useState([]);
  const [datasetTesting, setDatasetTesting] = React.useState([]);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/member").then((response) => {
      setData(response.data);
    });
    const fetch = async () => {
      const httpResponse = await HttpGetHelper.getData(
        "http://localhost:3002/training",
        {}
      );
      if (httpResponse) {
        setDataset(httpResponse);
      }
      const httpResponseTesting = await HttpGetHelper.getData(
        "http://localhost:3002/raw",
        {}
      );
      if (httpResponseTesting) {
        setDatasetTesting(httpResponseTesting);
      }
    };

    fetch();
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
                  statSubtitle="TRAINING"
                  statTitle={dataset.length}
                  statIconName="fas fa-database"
                  statIconColor="bg-blueGray-800"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TESTING"
                  statTitle={datasetTesting.length}
                  statIconName="fas fa-database"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
