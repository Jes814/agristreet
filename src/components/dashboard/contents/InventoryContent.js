import React from "react";
import { Route, Switch } from "react-router-dom";
import EditInventory from "./components/inventory/EditInventory";
import InventoryList from "./components/inventory/InventoryList";

function InventoryContent({ match }) {
  return (
    <>
      <Switch>
        <Route path={match.url + "/edit"} component={EditInventory} />
        <Route path={match.url + "/"} component={InventoryList} />
      </Switch>
    </>
  );
}

export default InventoryContent;
