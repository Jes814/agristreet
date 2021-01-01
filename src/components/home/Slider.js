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

function Slider() {
  var items = [
    {
      name: "Random Name #1",
      image: `${green}`,
    },
    {
      name: "Random Name #2",
      image: `${green}`,
    },
  ];

  return (
    <Carousel className="p-2">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Slider;
