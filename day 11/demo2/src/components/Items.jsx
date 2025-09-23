import React from "react";
import Cards from "./Cards";

const data = [
  {
    name: "Dabang",
    time: "2.5hrs",
  },
  {
    name: "War",
    time: "2.4hrs",
  },
  {
    name: "F1",
    time: "2.2hrs",
  },
  {
    name: "Dhoom",
    time: "2.5hrs",
  },
  {
    name: "KGF",
    time: "2.3hrs",
  },
  {
    name: "RRR",
    time: "3hrs",
  },
];

function Items() {
  return (
    <div>
      {/* {data.map((item) => {
        // console.log(item.name);
        <Cards></Cards>;
      })} */}
      {data.map((item) => (
        <Cards name={item.name} time={item.time}></Cards>
      ))}

      {/* <Cards name="Dhoom" time="2.5hrs"></Cards>
      <Cards name="War" time="2.4hrs"></Cards>
      <Cards name="F1" time="2.2hrs"></Cards> */}
    </div>
  );
}

export default Items;
