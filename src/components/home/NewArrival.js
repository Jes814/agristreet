import React from "react";
import veggie1 from "../../resources/veggie1.jpeg";
import veggie2 from "../../resources/veggie2.jpeg";
import veggie3 from "../../resources/veggie3.jpeg";
import veggie4 from "../../resources/veggie4.jpeg";

function NewArrival() {
  const datas = [
    {
      id: 1,
      cat_title: "Studio Design",
      name: "item 1",
      image: `${veggie1}`,
      price: "₱40.00",
    },
    {
      id: 2,
      cat_title: "Studio Design",
      name: "item 2",
      image: `${veggie2}`,
      price: "₱40.00",
    },
    {
      id: 3,
      cat_title: "Studio Design",
      name: "item 3",
      image: `${veggie3}`,
      price: "₱40.00",
    },
    {
      id: 4,
      cat_title: "Studio Design",
      name: "item 4",
      image: `${veggie4}`,
      price: "₱40.00",
    },
    {
      id: 5,
      cat_title: "Studio Design",
      name: "item 5",
      image: `${veggie4}`,
      price: "₱40.00",
    },
  ];

  const onMouseOver = () => {
    return;
  };
  return (
    <div className="md:py-16 md:mx-auto md:max-w-7xl lg:py-16 lg:mx-auto lg:max-w-7xl">
      <div className="py-3 text-3xl font-semibold text-center text-green-500 md:text-left md:text-2xl">
        New Products
      </div>
      <div className="grid grid-cols-1 gap-4 p-2 md:p-0 md:grid-cols-5 md:py-3">
        {datas.map((data) => (
          <div
            key={data.id}
            className="p-4 border-2 border-green-400 focus:ring-2 focus:ring-yellow-400"
          >
            <div className="overflow-hidden border-2 border-green-500">
              <img
                className="h-64 duration-500 ease-in transform hover:scale-105"
                src={data.image}
              />
            </div>
            <div className="pt-4 text-lg font-semibold text-gray-300">
              {data.cat_title}
            </div>
            <div className="pt-4 text-2xl font-semibold text-green-500">
              {data.name}
            </div>
            <div className="pt-4 text-base font-semibold text-green-400">
              {data.price}
            </div>
            <div className="pt-4 font-semibold">
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
    </div>
  );
}

export default NewArrival;
