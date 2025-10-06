import React from "react";
import "./CardData.css";

function CardData(props) {
  console.log(props);
  return (
    <div class="card">
      <h1>name :{props.data.name.common}</h1>
      <h3>capital : {props.data.capital}</h3>
      <img src={props.data.flags.png} alt="" height={70} />
    </div>
  );
}

export default CardData;
