import React from "react";
import green from "../../../resources/bg_3.jpg";

function ItemList() {
  const datas = [
    {
      id: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: `${green}`,
      price: "40.00",
    },
    {
      id: 2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: `${green}`,
      price: "40.00",
    },
    {
      id: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: `${green}`,
      price: "40.00",
    },
    {
      id: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: `${green}`,
      price: "40.00",
    },
    {
      id: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: `${green}`,
      price: "40.00",
    },
    {
      id: 6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: `${green}`,
      price: "40.00",
    },
  ];
  return (
    <div class="p-4 md:p-0 md:grid-cols-3 gap-4 grid grid-cols-1">
      {datas.map((data, id) => (
        <div key={id} className="border-2 border-green-400 rounded-lg">
          <img
            className="rounded-tl-lg rounded-tr-lg h-80"
            src={data.img}
            alt="search-image"
          />
          <div className="px-4 py-2 text-xl font-semibold text-green-400">
            <h2>&#8369;{data.price}</h2>
          </div>
          <div className="px-4 py-2">
            <h2>{data.description}</h2>
          </div>
          <div className="px-2 py-2">
            <button className="w-full p-2 mb-2 font-semibold text-gray-100 bg-green-400 border-green-400 rounded-lg">
              Add to Cart
            </button>
            <button className="w-full p-2 font-semibold text-green-400 bg-gray-300 border-gray-300 rounded-lg">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
