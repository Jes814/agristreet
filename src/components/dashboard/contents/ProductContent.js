import React from "react";
import { Route, Switch } from "react-router-dom";
import EditProduct from "./components/products/EditProduct";
import ProductList from "./components/products/ProductList";

function ProductContent({ match }) {
  console.log(match);
  return (
    <Switch>
      <Route path={match.url + "/edit"} component={EditProduct} />
      <Route path={match.url + "/"} component={ProductList} />
    </Switch>
  );
}

export default ProductContent;
