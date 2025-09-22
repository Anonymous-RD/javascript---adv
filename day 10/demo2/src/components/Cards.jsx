import React from "react";
import Movies from "./Movies";
import Time from "./Time";

function Cards(props) {
  // const a =10;
  // console.log(${a})
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.time}</p>
      {/* <Movies></Movies>
      <Time></Time> */}
    </div>
  );
}

export default Cards;
