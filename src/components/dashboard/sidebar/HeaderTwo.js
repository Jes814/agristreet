import React from "react";

function HeaderTwo({ openToggle }) {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="text-lg font-semibold tracking-wider text-green-400">
        Agristreet Dashboard
      </div>
      <div>
        <button onClick={openToggle} className="focus:outline-none lg:hidden">
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
      </div>
    </div>
  );
}

export default HeaderTwo;
