import React from "react";
import { Link } from "react-router-dom";
import image from "../../../../../resources/bg_2.jpg";

function EditInventory() {
  return (
    <div>
      <div className="flex justify-between m-20">
        {/* 1st Container */}
        <div className="w-1/2 p-4 bg-gray-100 border-2 border-green-500 rounded-lg">
          <h1 className="text-2xl">Inventory Detail</h1>

          {/* Category */}
          <div className="flex items-center justify-between py-4">
            <div className="w-1/2 text-xl">Category</div>
            <div className="w-1/2">
              <select className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none">
                <option>Select 1</option>
                <option>Select 2</option>
                <option>Select 3</option>
                <option>Select 4</option>
              </select>
            </div>
          </div>

          {/* Product Name */}
          <div className="flex items-center justify-between py-4">
            <div className="w-1/2 text-xl">Product Name</div>
            <div className="w-1/2">
              <input
                className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                placeholder="Product Name...."
              />
            </div>
          </div>

          {/* Brand Name */}
          <div className="flex items-center justify-between py-4">
            <div className="w-1/2 text-xl">Brand</div>
            <div className="w-1/2">
              <input
                className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                placeholder="Brand Name...."
              />
            </div>
          </div>

          {/* Stocks */}
          <div className="flex items-center justify-between py-4">
            <div className="w-1/2 text-xl">Stocks</div>
            <div className="w-1/2">
              <input
                className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                placeholder="Remaining stocks...."
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end py-4">
            <Link to="/farmer-dashboard/products">
              <div className="py-2 mx-4 duration-200 ease-in transform border-2 border-green-400 rounded-full cursor-pointer px-7 hover:border-red-400 hover:bg-red-400 hover:text-white">
                <button className="font-semibold focus:outline-none">
                  Back
                </button>
              </div>
            </Link>
            <div className="py-2 mx-4 duration-200 ease-in transform border-2 border-green-400 rounded-full cursor-pointer px-7 hover:border-blue-400 hover:bg-blue-400 hover:text-white">
              <button className="font-semibold focus:outline-none">
                Clear
              </button>
            </div>
            <div className="py-2 mx-4 duration-200 ease-in transform border-2 border-green-400 rounded-full cursor-pointer px-7 hover:bg-green-400 hover:text-white">
              <button className="font-semibold focus:outline-none">Edit</button>
            </div>
          </div>
        </div>

        {/* 2nd Container */}
        <div className="w-1/2 py-8 mx-3 bg-gray-100 border-2 border-green-400 rounded-lg">
          <div className="flex justify-center py-8">
            <img
              className="w-64 h-64 rounded-lg"
              src={image}
              alt="first-image"
            />
          </div>
          <div className="flex justify-center py-8">
            <div className="mx-3">
              <img
                className="w-32 h-32 rounded-lg"
                src={image}
                alt="first-image"
              />
            </div>
            <div className="mx-3">
              <img
                className="w-32 h-32 rounded-lg"
                src={image}
                alt="first-image"
              />
            </div>
            <div className="mx-3">
              <img
                className="w-32 h-32 rounded-lg"
                src={image}
                alt="first-image"
              />
            </div>
            <div className="mx-3">
              <img
                className="w-32 h-32 rounded-lg"
                src={image}
                alt="first-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditInventory;
