import React from "react";
import CardData from "./CardData";
import "./Card.css";
import { useState } from "react";

function Card(props) {
  const [edata, setEdata] = useState("");
  const data = props.sendData;
  //   console.log("props", props.sendData);
  return (
    <div id="card">
      <input
        type="text"
        onChange={(e) => {
          // console.log(e.target.value);
          let searchedData = e.target.value.toLowerCase();
          setEdata(searchedData);
        }}
      />
      {data
        .filter((flag) => flag.name.common.toLowerCase().includes(edata))
        .map((item) => (
          // console.log(item)
          <CardData data={item}></CardData>
        ))}
    </div>
  );
}

export default Card;
