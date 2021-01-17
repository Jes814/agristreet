import React from "react";
import { Link } from "react-router-dom";

function EditAccount() {
  return (
    <div className="m-20">
      <div className="flex items-center justify-center">
        <div className="w-1/2 p-4 bg-white border-2 border-green-400 rounded-lg">
          {/* Username */}
          <div className="flex items-center justify-between py-4">
            <div className="w-1/2 text-xl">
              <label>Username</label>
            </div>
            <div className="w-1/2">
              <input
                className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                placeholder="Username...."
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between py-4">
            <div className="w-1/2 text-xl">
              <label>Password</label>
            </div>
            <div className="w-1/2">
              <input
                className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                placeholder="Password...."
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex items-center justify-between py-4">
            <div className="w-1/2 text-xl">
              <label>Confirm Password</label>
            </div>
            <div className="w-1/2">
              <input
                className="w-full p-2 border-2 border-green-400 rounded-lg focus:outline-none"
                placeholder="Confirm Password...."
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end py-4">
            <Link to="/farmer-dashboard/accounts">
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
      </div>
    </div>
  );
}

export default EditAccount;
