import React from "react";

function Search() {
  return (
    <div className="py-10 mx-auto max-w-7xl">
      <div className="flex border-2 border-yellow-400">
        <div className="w-1/5 border-2 border-green-400">
          <h2>Box Left</h2>
        </div>
        <div className="w-3/5 border-2 border-blue-400">
          <h2>Box Middle</h2>
        </div>
        <div className="w-1/5 border-2 border-red-400">
          <h2>Box Right</h2>
        </div>
      </div>
    </div>
  );
}

export default Search;
