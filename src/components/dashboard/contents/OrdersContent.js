import React from "react";
import { Route, Switch } from "react-router-dom";
import OrderList from "./components/order/OrderList";

function OrdersContent({ match }) {
  return (
    <>
      <Switch>
        <Route path={match.url + "/"} component={OrderList} />
      </Switch>
    </>
  );
}

export default OrdersContent;
