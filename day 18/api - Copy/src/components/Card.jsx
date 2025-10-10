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
      />{" "}
      <div className="countries-container">
        {data
          .filter((country) =>
            country.name.common.toLowerCase().includes(edata)
          )
          .map((country) => {
            return (
              <CardData
                data={country}
                // key={country.name.common}
                // name={country.name.common}
                // flag={country.flags.svg}
                // population={country.population}
                // region={country.region}
                // capital={country.capital?.[0]}
              />
            );
          })}
      </div>
      {/* {data
        .filter((flag) => flag.name.common.toLowerCase().includes(edata))
        .map((item) => (
          // console.log(item)
          <CardData data={item}></CardData>
        ))} */}
    </div>
  );
}

export default Card;
