import React from "react";

function SellerForm() {
  return (
    <div className="py-16 mx-auto max-w-7xl">
      <div className="flex justify-center">
        <div className="w-1/2 border-2 border-green-500 rounded-xl">
          <div className="p-5 text-xl font-semibold text-green-500 border-b-2 border-green-500 animate-pulse">
            Create your Agristreet account
          </div>
          <div className="flex items-center p-5">
            <div className="w-48 pr-5 text-lg font-semibold tracking-tight text-green-500">
              Firstname :
            </div>
            <div className="w-1/2 border-2 border-green-500 rounded-lg">
              <input
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your first name"
              />
            </div>
          </div>
          <div className="flex items-center p-5">
            <div className="w-48 pr-5 text-lg font-semibold tracking-tight text-green-500">
              Middlename :
            </div>
            <div className="w-1/2 border-2 border-green-500 rounded-lg">
              <input
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your middle name"
              />
            </div>
          </div>
          <div className="flex items-center p-5">
            <div className="w-48 pr-5 text-lg font-semibold tracking-tight text-green-500">
              Lastname :
            </div>
            <div className="w-1/2 border-2 border-green-500 rounded-lg">
              <input
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your last name"
              />
            </div>
          </div>
          <div className="flex items-center p-5">
            <div className="w-48 pr-5 text-lg font-semibold tracking-tight text-green-500">
              Email Address :
            </div>
            <div className="w-1/2 border-2 border-green-500 rounded-lg">
              <input
                type="email"
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your email name"
              />
            </div>
          </div>
          <div className="flex items-center p-5">
            <div className="w-48 pr-5 text-lg font-semibold tracking-tight text-green-500">
              Username :
            </div>
            <div className="w-1/2 border-2 border-green-500 rounded-lg">
              <input
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your user name"
              />
            </div>
          </div>
          <div className="flex items-center p-5">
            <div className="w-48 pr-5 text-lg font-semibold tracking-tight text-green-500">
              Password :
            </div>
            <div className="w-1/2 border-2 border-green-500 rounded-lg">
              <input
                type="password"
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="your password"
              />
            </div>
          </div>
          <div className="flex items-center p-5 border-b-2 border-green-500">
            <div className="w-48 pr-5 text-lg font-semibold tracking-tight text-green-500">
              Confirm password :
            </div>
            <div className="w-1/2 border-2 border-green-500 rounded-lg">
              <input
                type="password"
                className="w-full px-2 py-1 rounded-lg focus:outline-none"
                placeholder="confirm your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="px-2 py-2">
              <button className="px-4 py-2 font-semibold text-green-500 border-2 border-green-500 rounded-lg hover:bg-red-500 hover:text-gray-100 hover:border-red-500">
                Cancel
              </button>
            </div>
            <div className="px-2 py-2">
              <button className="px-4 py-2 font-semibold text-green-500 border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-gray-100">
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
