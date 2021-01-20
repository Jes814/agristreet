import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Banner from "./components/maintenance/Banner";
import Others from "./components/maintenance/Others";

function MaintenanceContent({ match }) {
  return (
    <div className="m-10 bg-gray-100 border-2 border-green-400 rounded-lg">
      <div className="flex p-4">
        <Link to="/farmer-dashboard/maintenance">
          <div className="w-64 mr-3 border-2 border-green-400 rounded-lg">
            <button className="w-full py-2 font-semibold duration-150 ease-in transform rounded-lg focus:outline-none hover:bg-green-400 hover:text-white">
              Banner
            </button>
          </div>
        </Link>
        <Link to="/farmer-dashboard/maintenance/others">
          <div className="w-64 border-2 border-green-400 rounded-lg">
            <button className="w-full py-2 font-semibold duration-150 ease-in transform rounded-lg focus:outline-none hover:bg-green-400 hover:text-white">
              Others
            </button>
          </div>
        </Link>
      </div>
      <div className="mx-4 my-2 border-2 border-green-400 rounded-lg">
        <Switch>
          <Route path={match.url + "/others"} component={Others} />
          <Route path={match.url + "/"} component={Banner} />
        </Switch>
      </div>
    </div>
  );
}

export default MaintenanceContent;
