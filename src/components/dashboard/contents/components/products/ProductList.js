import React from "react";
import { Pagination } from "@material-ui/lab";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div className="mx-20">
      {/* FILTERS */}
      <div className="flex items-center justify-between mt-20 mb-2">
        <div className="px-4 py-2 text-blue-500 duration-200 ease-in transform border-2 border-blue-500 cursor-pointer rounded-xl hover:text-white hover:border-green-400 hover:bg-green-400">
          <button className="text-xl font-semibold">
            <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i> New
            Product
          </button>
        </div>
        <div className="w-1/4 px-4 py-2">
          <select className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none">
            <option>Select 1</option>
            <option>Select 2</option>
            <option>Select 3</option>
            <option>Select 4</option>
          </select>
        </div>
        <div className="w-1/4 px-4 py-2">
          <select className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none">
            <option>Select 1</option>
            <option>Select 2</option>
            <option>Select 3</option>
            <option>Select 4</option>
          </select>
        </div>
        <div className="w-1/4 px-4 py-2">
          <input
            className="w-full p-3 rounded-lg focus:outline-none"
            placeholder="Search Product List ...."
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="flex justify-between bg-white h-96">
        <div className="w-5/6 border-2 border-r-0 border-black rounded-tl-xl rounded-bl-xl">
          <div className="py-2 m-4 bg-blue-400 ">table data</div>
        </div>
        <div className="w-2/12 border-2 border-black rounded-tr-lg rounded-br-lg">
          <div className="flex text-center">
            <div className="w-full py-2 m-4 bg-green-400 rounded-lg">
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i> edit
            </div>
            <div className="w-full py-2 m-4 bg-red-400 rounded-lg">
              <i class="fa fa-trash-o" aria-hidden="true"></i> delete
            </div>
          </div>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center py-2">
        <Pagination count={10} variant="outlined" />
      </div>

      <Link to="/farmer-dashboard/products/edit">
        <h2>Go to Product Detail</h2>
      </Link>
    </div>
  );
}

export default ProductList;
