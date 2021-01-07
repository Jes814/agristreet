import React from "react";
import Carousel from "react-material-ui-carousel";
import farmer1 from "../../resources/farmer1.jpg";
import farmer2 from "../../resources/farmer2.jpg";
import farmer3 from "../../resources/farmer3.jpg";

function Item(props) {
  return (
    <div className="bg-white md:flex md:justify-between">
      <div className="w-full md:w-2/5">
        <img src={props.item.image} alt="green-image" />
      </div>
      <div className="w-full px-2 pt-6 md:w-3/5">
        <p className="text-base md:text-3xl">{props.item.description}</p>
        <p className="text-xl italic text-gray-400 underline pt-14 md:text-2xl">
          {props.item.name}
        </p>
      </div>
    </div>
  );
}

function Farmers() {
  var items = [
    {
      name: "Farmer #1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      image: `${farmer1}`,
    },
    {
      name: "Farmer #2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      image: `${farmer2}`,
    },
    {
      name: "Farmer #3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      image: `${farmer3}`,
    },
  ];

  return (
    <div className="p-2 pb-4 md:pb-10 lg:pb-10">
      <Carousel animation="slide">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

export default Farmers;
