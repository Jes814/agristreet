import React from "react";
import { Pagination } from "@material-ui/lab";

function OrderList() {
  return (
    <div className="mx-20">
      {/* FILTERS */}
      <div className="flex items-center justify-end mt-20 mb-2">
        <div className="w-1/4 py-2">
          <select className="w-full p-3 border-2 border-green-400 rounded-lg focus:outline-none">
            <option>Select 1</option>
            <option>Select 2</option>
            <option>Select 3</option>
            <option>Select 4</option>
          </select>
        </div>
        <div className="w-1/4 px-4 py-2">
          <select className="w-full p-3 border-2 border-green-400 rounded-lg focus:outline-none">
            <option>Select 1</option>
            <option>Select 2</option>
            <option>Select 3</option>
            <option>Select 4</option>
          </select>
        </div>
        <div className="w-1/4 py-2">
          <input
            className="w-full p-3 border-2 border-green-400 rounded-lg focus:outline-none"
            placeholder="Search Product List ...."
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="flex justify-between bg-white rounded-lg h-96">
        <div className="w-5/6 border-2 border-r-0 border-green-400 rounded-tl-xl rounded-bl-xl">
          <div className="py-2 m-4 bg-blue-400 ">table data</div>
        </div>
        <div className="w-2/12 border-2 border-green-400 rounded-tr-lg rounded-br-lg">
          <div className="flex font-semibold text-center text-white">
            <div className="w-full py-2 m-4 bg-green-400 rounded-lg">
              <div>
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> edit
              </div>
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
    </div>
  );
}

export default OrderList;
