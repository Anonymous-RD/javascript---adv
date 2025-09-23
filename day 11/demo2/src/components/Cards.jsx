import React, { useState } from "react";
import Movies from "./Movies";
import Time from "./Time";
import "./Cards.css";

function Cards(props) {
  // let name = props.name;
  const [name, setName] = useState(props.name);
  function onClickHandler() {
    setName("Laptop");
    // console.log(name);
    // alert("Button Clicked");
  }

  // const a =10;
  // console.log(${a})
  return (
    <div class="cards">
      <h3>{name}</h3>
      <p>{props.time}</p>
      <button onClick={onClickHandler}>Click</button>
      {/* <Movies></Movies>
      <Time></Time> */}
    </div>
  );
}

export default Cards;
