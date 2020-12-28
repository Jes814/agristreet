import React from "react";
import BgImage from "../../resources/bg_2.jpg";
import { Switch, Route } from "react-router-dom";

//Bars
import Header from "./sidebar/Header";
import Sidebar from "./sidebar/Sidebar";

//Contents
import DashboardContent from "./contents/DashboardContent";
import OrdersContent from "./contents/OrdersContent";
import ProductContent from "./contents/ProductContent";
import InventoryContent from "./contents/InventoryContent";
import NotificationsContent from "./contents/NotificationsContent";

function FarmerDashboard({ match }) {
  console.log(match);
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right,  rgba(236, 240, 241,0.9),  rgba(240, 243, 244,0.9), rgba(244, 246, 247,0.9)), url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex">
          <div className="w-1/6">
            <Sidebar />
          </div>
          <div className="w-full">
            <div>
              <div className="h-20 border-2 border-l-0 border-green-500">
                <Header />
              </div>
              <div className="h-screen border-2 border-t-0 border-l-0 border-green-500">
                <Switch>
                  <Route
                    path={match.url + "/notifications"}
                    component={NotificationsContent}
                  />
                  <Route
                    path={match.url + "/inventory"}
                    component={InventoryContent}
                  />
                  <Route
                    path={match.url + "/products"}
                    component={ProductContent}
                  />
                  <Route
                    path={match.url + "/order"}
                    component={OrdersContent}
                  />
                  <Route
                    path="/farmer-dashboard"
                    component={DashboardContent}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FarmerDashboard;
