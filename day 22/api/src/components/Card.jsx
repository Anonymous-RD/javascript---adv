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
      <span>Find : </span>
      <span> </span>
      <input
        type="text"
        onChange={(e) => {
          // console.log(e.target.value);
          let searchedData = e.target.value.toLowerCase();
          setEdata(searchedData);
        }}
      />{" "}
      <div class="countries">
        {data
          .filter((country) =>
            country.name.common.toLowerCase().includes(edata)
          )
          .map((country) => {
            return <CardData data={country} />;
          })}
      </div>
    </div>
  );
}

export default Card;
