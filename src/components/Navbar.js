import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openToggle = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <div>
      <div className="md:mx-auto md:max-w-7xl">
        <div className="flex items-center justify-between p-4 text-green-500 md:py-3">
          <div className="md:hidden">
            <Link to="/">
              <h2 className="text-2xl animate-pulse">Agristreet</h2>
            </Link>
          </div>
          <div className="hidden md:animate-pulse md:block">
            <Link to="/">
              <h1>Welcome to Agristreet</h1>
            </Link>
          </div>

          <div className="flex items-center">
            <button
              onClick={openToggle}
              className="focus:outline-none md:hidden"
            >
              <svg
                className="w-8 h-8 text-green-400 fill-current hover:text-green-500"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden md:block">
              <div className="flex">
                <Link to="/create-seller">
                  <div className="px-4 hover:text-yellow-400">
                    Sell on Agristreet
                  </div>
                </Link>
                |
                <Link to="/compare">
                  <div className="px-4 hover:text-yellow-400">Compare</div>
                </Link>
                |
                <Link to="/login">
                  <div className="px-4 hover:text-yellow-400">
                    <i className="px-2 fa fa-user"></i>Login
                  </div>
                </Link>
                |
                <Link to="/create-seller">
                  <div className="px-4 hover:text-yellow-400">
                    <i className="px-2 fa fa-pencil-square-o"></i>Signup
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={open ? "flex flex-col md:hidden" : "hidden"}>
          <Link to="/create-seller">
            <div className="py-2 pl-4 my-1 font-semibold focus:outline-none hover:bg-green-400 hover:text-gray-100">
              Sell on Agristreet
            </div>
          </Link>
          <Link to="/compare">
            <div className="py-2 pl-4 my-1 font-semibold focus:outline-none hover:bg-green-400 hover:text-gray-100">
              Compare
            </div>
          </Link>
          <Link to="/login">
            <div className="py-2 pl-4 my-1 font-semibold focus:outline-none hover:bg-green-400 hover:text-gray-100">
              <i className="pr-2 fa fa-user"></i>Login
            </div>
          </Link>
          <Link to="/create-seller">
            <div className="py-2 pl-4 my-1 font-semibold focus:outline-none hover:bg-green-400 hover:text-gray-100">
              <i className="pr-2 fa fa-pencil-square-o"></i>Signup
            </div>
          </Link>
        </div>
      </div>
      <hr className="m-0 border-green-500" />
    </div>
  );
}

export default Navbar;
