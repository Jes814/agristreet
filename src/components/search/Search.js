import React from "react";
import CartList from "./components/CartList";
import ItemList from "./components/ItemList";
import PriceFilter from "./components/PriceFilter";

function Search() {
  return (
    <div className="py-10 mx-auto max-w-7xl">
      <div className="md:flex">
        <div className="mx-4 border-2 border-green-400 rounded-lg shadow-md md:w-1/5 h-96">
          <PriceFilter />
        </div>
        <div className="shadow-md md:w-3/5">
          <ItemList />
        </div>
        <div className="mx-4 border-2 border-green-400 shadow-md md:w-1/5 h-96">
          <CartList />
        </div>
      </div>
    </div>
  );
}

export default Search;
