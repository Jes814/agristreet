import React from "react";

function Header() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="p-6 text-2xl font-semibold tracking-wider text-green-400">
          Agristreet Dashboard
        </div>
        <div className="flex items-center">
          <div className="px-4 text-lg font-semibold text-green-400">
            <i className="px-2 text-green-400 fa fa-id-card fa-xl"></i>
            Profile
          </div>
          |
          <div className="px-4 text-lg font-semibold text-green-400">
            <i className="px-2 text-green-400 fa fa-user fa-xl"></i>
            Account
          </div>
          |
          <div className="px-4 text-lg font-semibold text-green-400">
            <i className="px-2 text-green-400 fa fa-sign-out fa-xl"></i>
            Logout
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
