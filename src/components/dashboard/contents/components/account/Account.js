import React from "react";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <h2>Account Page</h2>
      <Link to="/farmer-dashboard/account/edit">Go to account edit</Link>
    </div>
  );
}

export default Account;
