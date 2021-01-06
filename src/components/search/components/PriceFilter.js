import React from "react";

function PriceFilter() {
  return (
    <>
      <div className="p-4 text-2xl text-green-400">
        <h2>Filters</h2>
      </div>
      <hr className="bg-gray-200 border-2" />
      <div className="p-4">
        <h2>From</h2>
        <input
          className="p-2 border-2 border-green-400 rounded-lg focus:outline-none"
          placeholder="from"
        />
      </div>
      <div className="p-4">
        <h2>To</h2>
        <input
          className="p-2 border-2 border-green-400 rounded-lg focus:outline-none"
          placeholder="to"
        />
      </div>
      <div className="px-4 pt-8">
        <button className="w-full p-2 text-white bg-green-400 border-2 border-green-400 rounded-lg focus:outline-none">
          Filter by price
        </button>
      </div>
    </>
  );
}

export default PriceFilter;
