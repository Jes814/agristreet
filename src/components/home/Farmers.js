import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import green from "../../resources/bg.jpg";

function Item(props) {
  return (
    <Paper>
      <p>{props.item.name}</p>
      <img src={props.item.image} alt="green-image" />

      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
}

function Farmers() {
  var items = [
    {
      name: "Farmer #1",
      image: `${green}`,
    },
    {
      name: "Farmer #2",
      image: `${green}`,
    },
  ];

  return (
    <div className="pb-10">
      <Carousel animation="slide">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

export default Farmers;
