import React from "react";
import FarmerDashboard from "../components/dashboard/FarmerDashboard";

function FarmerDashboardPage({ match }) {
  return (
    <div>
      <FarmerDashboard match={match} />
    </div>
  );
}

export default FarmerDashboardPage;
