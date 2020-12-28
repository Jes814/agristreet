import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-3 text-green-500">
          <div className="animate-pulse">
            <Link to="/">
              <h1>Welcome to Agristreet</h1>
            </Link>
          </div>
          <div>
            <ul className="flex items-center">
              <li className="px-4">
                <Link to="/create-seller">
                  <button className="focus:outline-none hover:text-yellow-400">
                    Sell on Agristreet
                  </button>
                </Link>
              </li>
              |
              <li className="px-4">
                <Link to="/compare">
                  <button className="focus:outline-none hover:text-yellow-400">
                    Compare
                  </button>
                </Link>
              </li>
              |
              <li className="px-4">
                <Link to="/login">
                  <button className="focus:outline-none hover:text-yellow-400">
                    <i className="px-2 fa fa-user"></i>Login
                  </button>
                </Link>
              </li>
              |
              <li className="px-4">
                <Link to="/create-seller">
                  <button className="focus:outline-none hover:text-yellow-400">
                    <i className="px-2 fa fa-pencil-square-o"></i>Signup
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="m-0 border-green-500" />
    </div>
  );
}

export default Navbar;
