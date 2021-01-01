import React from "react";

function SellerForm() {
  return (
    <div className="md:h-screen md:py-16 md:mx-auto md:max-w-7xl">
      <div className="px-4 py-8 md:flex md:justify-center md:py-0 md:px-0">
        <div className="w-full border-2 border-green-500 md:w-1/3 rounded-xl">
          <div className="p-5 text-xl font-semibold text-center text-green-500 border-b-2 border-green-500 md:text-left animate-pulse">
            Login to Agristreet
          </div>
          <div className="p-5">
            <div className="pb-3 text-2xl font-semibold tracking-tight text-green-500 md:text-lg">
              Username :
            </div>
            <div className="border-2 border-green-500 rounded-lg">
              <input
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="type your username"
              />
            </div>
          </div>
          <div className="p-5">
            <div className="pb-3 text-2xl font-semibold tracking-tight text-green-500 md:text-lg">
              Password :
            </div>
            <div className="border-2 border-green-500 rounded-lg">
              <input
                type="password"
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="type your password"
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
    </div>
  );
}

export default SellerForm;
