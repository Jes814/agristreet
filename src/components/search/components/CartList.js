import React from "react";

function CartList() {
  const datas = [
    {
      id: 1,
      name: "Item 1",
      pieces: "4",
      item_price: "450.00",
    },
    {
      id: 2,
      name: "Item 2",
      pieces: "3",
      item_price: "450.00",
    },
    {
      id: 3,
      name: "Item 3",
      pieces: "4",
      item_price: "450.00",
    },
    {
      id: 4,
      name: "Item 4",
      pieces: "4",
      item_price: "450.00",
    },
    {
      id: 5,
      name: "Item 5",
      pieces: "4",
      item_price: "450.00",
    },
    {
      id: 6,
      name: "Item 6",
      pieces: "4",
      item_price: "450.00",
    },
  ];
  return (
    <>
      <div className="overflow-y-scroll shadow-md h-72">
        {datas.map((data, id) => (
          <div key={id}>
            <div className="p-4 font-semibold text-center">
              {data.name} x {data.pieces}: &#8369;{data.item_price}
            </div>
            <hr className="bg-green-400 border-2" />
          </div>
        ))}
      </div>
      <div className="font-semibold text-white bg-green-400">
        <p className="py-8 mt-1 text-center">
          Total Price: &#8369;<b>4500.00</b>
        </p>
      </div>
    </>
  );
}

export default CartList;
