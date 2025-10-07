import React from "react";
import "./CardData.css";

function CardData(props) {
  console.log(props);
  return (
    <div>
      <hr />
      <h3>name :{props.data.name.common}</h3>
      <h5>capital : {props.data.capital}</h5>
      <img src={props.data.flags.png} alt={props.data.flags.alt} height={100} />
    </div>
  );
}

export default CardData;
