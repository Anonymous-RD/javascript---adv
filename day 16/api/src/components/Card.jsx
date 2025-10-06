import React from "react";
import CardData from "./CardData";
import "./Card.css";

function Card(props) {
  const data = props.sendData;
  //   console.log("props", props.sendData);
  return (
    <div id="card">
      {data.map((item) => (
        // console.log(item)
        <CardData data={item}></CardData>
      ))}
    </div>
  );
}

export default Card;
