import React from "react";

function Compare() {
  return (
    <div className="py-16 mx-auto max-w-7xl">
      <div className="">
        <div className="pb-5 text-2xl font-semibold">Compare Items</div>
        <div className="flex">
          <div className="w-1/5 h-screen border-2 border-green-500 rounded-tl-lg rounded-bl-lg">
            {/* 1st Container */}
          </div>
          <div className="w-1/3 h-screen border-2 border-l-0 border-green-500">
            <div className="flex flex-col">
              <div className="h-screen">
                <div className="border-2 border-t-0 border-l-0 border-r-0 border-green-500 h-1/2">
                  Grid 1
                </div>
                <div className="h-1/2">Grid 2</div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-screen border-2 border-l-0 border-green-500">
            <div className="flex flex-col">
              <div className="h-screen">
                <div className="border-2 border-t-0 border-l-0 border-r-0 border-green-500 h-1/2">
                  Grid 3
                </div>
                <div className="h-1/2">Grid 4</div>
              </div>
            </div>
          </div>
          <div className="w-1/5 h-screen border-2 border-l-0 border-green-500 rounded-tr-lg rounded-br-lg">
            <div className="flex flex-col">
              <div className="h-screen">
                <div className="border-2 border-t-0 border-l-0 border-r-0 border-green-500 h-1/2">
                  Grid 5
                </div>
                <div className="h-1/2">Grid 6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
