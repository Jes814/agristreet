import React from "react";
import { Link } from "react-router-dom";
import logo from "../resources/logo.png";

function NavbarTwo() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center justify-between py-3 text-green-500">
        <div className="w-1/4">
          <Link to="/">
            <img src={`${logo}`} alt="home-logo" />
          </Link>
        </div>
        <div className="flex w-3/4">
          <div className="relative w-3/4 pt-2 mx-auto text-green-500">
            <input
              class="border-2 border-green-500 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 mt-4 mr-4 focus:outline-none hover:text-yellow-400"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>

          <div className="flex items-center justify-end w-1/4 mt-4">
            <div className="px-4">
              <button className="focus:outline-none hover:text-yellow-400">
                <i className="fa fa-heart fa-2x"></i>
              </button>
            </div>
            <div className="px-6">
              <button className="focus:outline-none hover:text-yellow-400">
                <i className="fa fa-shopping-cart fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarTwo;
