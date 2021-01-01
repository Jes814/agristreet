import React from "react";

function Compare() {
  return (
    <div className="py-16 mx-auto max-w-7xl">
      <div className="p-5 text-3xl font-semibold text-center md:text-2xl md:pb-5 md:text-left lg:text-2xl lg:pb-5 lg:text-left">
        Compare Items
      </div>
      <div className="lg:flex">
        <div className="w-full border-2 border-b-0 border-green-500 lg:border-b-2 lg:rounded-tl-lg lg:rounded-bl-lg h-96 lg:w-1/5 lg:h-screen">
          {/* 1st Container */}
        </div>

        {/* Grid 1 & 2 */}

        <div className="w-full border-2 border-b-0 border-green-500 lg:border-b-2 h-96 lg:w-1/3 lg:h-screen">
          <div className="lg:flex lg:flex-col">
            <div className="h-96 lg:h-screen">
              <div className="border-2 border-t-0 border-l-0 border-r-0 border-green-500 h-1/2">
                Grid 1
              </div>
              <div className="h-1/2">Grid 2</div>
            </div>
          </div>
        </div>

        {/* Grid 3 & 4*/}

        <div className="w-full border-2 border-b-0 border-green-500 lg:border-b-2 h-96 lg:w-1/3 lg:h-screen ">
          <div className="lg:flex lg:flex-col">
            <div className="h-96 lg:h-screen">
              <div className="border-2 border-t-0 border-l-0 border-r-0 border-green-500 h-1/2">
                Grid 3
              </div>
              <div className="h-1/2">Grid 4</div>
            </div>
          </div>
        </div>

        {/* Grid 5 & 6*/}
        <div className="w-full border-2 border-green-500 lg:border-l-0 lg:rounded-tr-lg lg:rounded-br-lg h-96 lg:w-1/5 lg:h-screen">
          <div className="lg:flex lg:flex-col">
            <div className="h-96 lg:h-screen">
              <div className="border-2 border-t-0 border-l-0 border-r-0 border-green-500 lg:border-l-0 lg:border-t-0 h-1/2">
                Grid 5
              </div>
              <div className="h-1/2">Grid 6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
