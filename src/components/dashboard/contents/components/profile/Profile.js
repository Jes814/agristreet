import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/farmer-dashboard/profile/edit">Go to profile edit</Link>
    </div>
  );
}

export default Profile;
