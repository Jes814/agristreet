import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "./components/account/Account";
import EditAccount from "./components/account/EditAccount";

function AccountContent({ match }) {
  return (
    <Switch>
      <Route path={match.url + "/edit"} component={EditAccount} />
      <Route path={match.url + "/"} component={Account} />
    </Switch>
  );
}

export default AccountContent;
