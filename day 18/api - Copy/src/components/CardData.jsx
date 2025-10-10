import React from "react";
import "./CardData.css";

function CardData(props) {
  console.log(props);
  return (
    <div>
      <a className="country-card" href={`/`}>
        <img
          src={props.data.flags.png}
          alt={props.data.flags.alt}
          height={100}
        />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>

          <p>
            {/* <b>Name: </b>
            {props.data.name.common} */}
            {/* <b>Population: </b>
            {population.toLocaleString("en-IN")} */}
          </p>
          <p>
            <b>Name: </b>
            {props.data.name.common}
          </p>
          <p>
            <b>Capital: </b>
            {props.data.capital}
          </p>
        </div>
      </a>
    </div>
  );
}

export default CardData;
