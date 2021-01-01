import React from "react";
import { Link } from "react-router-dom";
import logo from "../resources/logo.png";

function NavbarTwo() {
  return (
    <div className="md:mx-auto md:max-w-7xl">
      <div className="text-green-500 md:flex md:items-center md:justify-between md:py-3">
        <div className="hidden md:w-1/4 md:block">
          <Link to="/">
            <img src={`${logo}`} alt="home-logo" />
          </Link>
        </div>
        <div className="md:flex md:w-3/4">
          <div className="relative p-2 py-4 mx-auto text-green-500 md:py-0 md:pt-2 md:w-3/4">
            <input
              className="w-full h-10 px-5 pr-16 text-sm bg-white border-2 border-green-500 rounded-lg focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 mt-6 mr-6 md:mr-4 md:mt-4 focus:outline-none hover:text-yellow-400"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>

          <div className="hidden w-1/4 mt-4 md:block">
            <div className="flex items-center justify-end">
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
    </div>
  );
}

export default NavbarTwo;
