import React from "react";

function SellerForm() {
  return (
    <div className="md:h-screen md:py-16 md:mx-auto md:max-w-7xl">
      <div className="p-4 md:flex md:justify-center md:p-0">
        <div className="w-full border-2 border-green-500 md:w-1/2 rounded-xl">
          <div className="p-5 text-xl font-semibold text-center text-green-500 border-b-2 border-green-500 md:text-left animate-pulse">
            Agristreet create account
          </div>
          <div className="px-5 py-3 md:py-5 md:px-5 md:flex md:items-center">
            <div className="w-full py-2 text-2xl font-semibold tracking-tight text-green-500 md:py-0 md:text-lg md:w-48 md:pr-5">
              Firstname :
            </div>
            <div className="w-full border-2 border-green-500 rounded-lg md:w-1/2">
              <input
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your first name"
              />
            </div>
          </div>
          <div className="px-5 py-3 md:py-5 md:px-5 md:flex md:items-center">
            <div className="w-full py-2 text-2xl font-semibold tracking-tight text-green-500 md:py-0 md:text-lg md:w-48 md:pr-5">
              Middlename :
            </div>
            <div className="w-full border-2 border-green-500 rounded-lg md:w-1/2">
              <input
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your middle name"
              />
            </div>
          </div>
          <div className="px-5 py-3 md:py-5 md:px-5 md:flex md:items-center">
            <div className="w-full py-2 text-2xl font-semibold tracking-tight text-green-500 md:py-0 md:text-lg md:w-48 md:pr-5">
              Lastname :
            </div>
            <div className="w-full border-2 border-green-500 rounded-lg md:w-1/2">
              <input
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your last name"
              />
            </div>
          </div>
          <div className="px-5 py-3 md:py-5 md:px-5 md:flex md:items-center">
            <div className="w-full py-2 text-2xl font-semibold tracking-tight text-green-500 md:py-0 md:text-lg md:w-48 md:pr-5">
              Email Address :
            </div>
            <div className="w-full border-2 border-green-500 rounded-lg md:w-1/2">
              <input
                type="email"
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your email name"
              />
            </div>
          </div>
          <div className="px-5 py-3 md:py-5 md:px-5 md:flex md:items-center">
            <div className="w-full py-2 text-2xl font-semibold tracking-tight text-green-500 md:py-0 md:text-lg md:w-48 md:pr-5">
              Username :
            </div>
            <div className="w-full border-2 border-green-500 rounded-lg md:w-1/2">
              <input
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your user name"
              />
            </div>
          </div>
          <div className="px-5 py-3 md:py-5 md:px-5 md:flex md:items-center">
            <div className="w-full py-2 text-2xl font-semibold tracking-tight text-green-500 md:py-0 md:text-lg md:w-48 md:pr-5">
              Password :
            </div>
            <div className="w-full border-2 border-green-500 rounded-lg md:w-1/2">
              <input
                type="password"
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your password"
              />
            </div>
          </div>
          <div className="px-5 py-3 border-b-2 border-green-400 md:py-5 md:px-5 md:flex md:items-center">
            <div className="w-full py-2 text-2xl font-semibold tracking-tight text-green-500 md:py-0 md:text-lg md:w-48 md:pr-5">
              Confirm password :
            </div>
            <div className="w-full border-2 border-green-500 rounded-lg md:w-1/2">
              <input
                type="password"
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="confirm your password"
              />
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-end">
            <div className="px-5 py-5 md:py-2 md:px-2">
              <button className="w-full px-4 py-2 font-semibold text-green-500 border-2 border-green-500 rounded-lg hover:bg-red-500 hover:text-gray-100 hover:border-red-500">
                Cancel
              </button>
            </div>
            <div className="px-5 pb-5 md:pb-2 md:py-2 md:px-2">
              <button className="w-full px-4 py-2 font-semibold text-green-500 border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-gray-100">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerForm;
