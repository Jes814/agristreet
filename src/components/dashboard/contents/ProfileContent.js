import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import EditProfile from "./components/profile/EditProfile";

function ProfileContent({ match }) {
  return (
    <Switch>
      <Route path={match.url + "/edit"} component={EditProfile} />
      <Route path={match.url + "/"} component={Profile} />
    </Switch>
  );
}

export default ProfileContent;
