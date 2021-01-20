import React from "react";
import img from "../../../../../resources/display.jpg";

function Banner() {
  return (
    <div>
      <div className="p-4 rounded-lg">
        <img className="w-full" src={img} alt="main-display" />
      </div>
      <div className="px-4 py-2">
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-lg">
            <label className="flex flex-col items-center px-4 py-6 tracking-wide text-green-400 uppercase bg-white border border-green-400 rounded-lg shadow-lg cursor-pointer hover:bg-green-400 hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base font-semibold leading-normal">
                Select a file
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <div className="rounded-lg">
            <label className="flex flex-col items-center px-4 py-6 tracking-wide text-green-400 uppercase bg-white border border-green-400 rounded-lg shadow-lg cursor-pointer hover:bg-green-400 hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base font-semibold leading-normal">
                Select a file
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <div className="rounded-lg">
            <label className="flex flex-col items-center px-4 py-6 tracking-wide text-green-400 uppercase bg-white border border-green-400 rounded-lg shadow-lg cursor-pointer hover:bg-green-400 hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base font-semibold leading-normal">
                Select a file
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <div className="rounded-lg">
            <label className="flex flex-col items-center px-4 py-6 tracking-wide text-green-400 uppercase bg-white border border-green-400 rounded-lg shadow-lg cursor-pointer hover:bg-green-400 hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base font-semibold leading-normal">
                Select a file
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
