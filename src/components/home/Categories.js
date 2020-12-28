import React from "react";
import green from "../../resources/bg_3.jpg";

function Categories() {
  const dataOne = [
    {
      id: 1,
      name: "item 1",
      image: `${green}`,
    },
    {
      id: 2,
      name: "item 2",
      image: `${green}`,
    },
    {
      id: 3,
      name: "item 3",
      image: `${green}`,
    },
    {
      id: 4,
      name: "item 4",
      image: `${green}`,
    },
  ];
  const dataTwo = [
    {
      id: 1,
      name: "item 1",
      image: `${green}`,
    },
    {
      id: 2,
      name: "item 2",
      image: `${green}`,
    },
    {
      id: 3,
      name: "item 3",
      image: `${green}`,
    },
    {
      id: 4,
      name: "item 4",
      image: `${green}`,
    },
  ];
  return (
    <div className="py-16 mx-auto max-w-7xl">
      <div className="text-2xl font-semibold text-green-500">Categories</div>

      {/* 1st category layer */}
      <div className="grid grid-cols-4 gap-4 py-3">
        {dataOne.map((data) => (
          <>
            <div
              key={data.id}
              className="p-4 border-2 border-green-500 cursor-pointer rounded-xl"
            >
              <div className="overflow-hidden border-2 border-green-500">
                <img
                  className="duration-500 ease-in transform hover:scale-105"
                  src={data.image}
                />
              </div>
              <div className="pt-4 text-xl font-semibold text-green-500">
                {data.name}
              </div>
            </div>
          </>
        ))}
      </div>

      {/* 2nd category layer */}
      <div className="grid grid-cols-4 gap-4 py-3">
        {dataTwo.map((data) => (
          <>
            <div
              key={data.id}
              className="p-4 border-2 border-green-500 cursor-pointer rounded-xl"
            >
              <div className="overflow-hidden border-2 border-green-500">
                <img
                  className="duration-500 ease-in transform hover:scale-105"
                  src={data.image}
                />
              </div>
              <div className="pt-4 text-xl font-semibold text-green-500">
                {data.name}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Categories;
