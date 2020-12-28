import React from "react";

function SellerForm() {
  return (
    <div className="flex flex-col py-16 mx-auto max-w-7xl">
      <div className="flex justify-center flex-1">
        <div className="w-1/3 border-2 border-green-500 rounded-xl">
          <div className="p-5 text-xl font-semibold text-green-500 border-b-2 border-green-500 animate-pulse">
            Login to Agristreet
          </div>
          <div className="p-5">
            <div className="pb-3 text-lg font-semibold tracking-tight text-green-500">
              Username
            </div>
            <div className="border-2 border-green-500 rounded-lg">
              <input
                className="px-2 py-1 rounded-lg focus:outline-none"
                placeholder="type your username"
              />
            </div>
          </div>
          <div className="p-5">
            <div className="pb-3 text-lg font-semibold tracking-tight text-green-500">
              Password
            </div>
            <div className="border-2 border-green-500 rounded-lg">
              <input
                type="password"
                className="px-2 py-1 rounded-lg focus:outline-none"
                placeholder="type your username"
              />
            </div>
          </div>
          <div className="p-3">
            <div className="px-2 py-2">
              <button className="w-full px-4 py-2 font-semibold text-green-500 border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-gray-100">
                Login
              </button>
            </div>
          </div>
          <div className="p-1 pt-0">
            <button className="w-full px-4 py-2 font-semibold text-left text-green-500 hover:text-yellow-500">
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
      <div className="h-40"></div>
    </div>
  );
}

export default SellerForm;
