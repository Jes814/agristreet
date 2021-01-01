import React, { useState } from "react";
import BgImage from "../../resources/bg_2.jpg";
import { Switch, Route } from "react-router-dom";

//Bars
import Header from "./sidebar/Header";
import Sidebar from "./sidebar/Sidebar";
import HeaderTwo from "./sidebar/HeaderTwo";

//Contents
import DashboardContent from "./contents/DashboardContent";
import OrdersContent from "./contents/OrdersContent";
import ProductContent from "./contents/ProductContent";
import InventoryContent from "./contents/InventoryContent";
import NotificationsContent from "./contents/NotificationsContent";

function FarmerDashboard({ match }) {
  const [open, setOpen] = useState(false);

  const openToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right,  rgba(236, 240, 241,0.9),  rgba(240, 243, 244,0.9), rgba(244, 246, 247,0.9)), url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-full">
          {/* Lg view */}
          <div className="hidden min-h-screen lg:block lg:w-1/6">
            <Sidebar />
          </div>
          <div className="fixed z-10 lg:hidden lg:w-1/6">
            <Sidebar open={open} />
          </div>

          <div className="w-full">
            <div>
              <div className="min-h-screen">
                {/* Lg view */}
                <div className="hidden h-20 border-b-2 border-green-500 lg:block">
                  <Header />
                </div>

                {/* Mobile */}
                <div className="relative h-20 border-b-2 border-green-500 lg:hidden">
                  <HeaderTwo openToggle={openToggle} />
                </div>

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
