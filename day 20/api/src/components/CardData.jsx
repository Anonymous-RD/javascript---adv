import React from "react";
import "./CardData.css";

function CardData(props) {
  // console.log(props);
  return (
    <div>
      <a class="country-card" href="/countrypage">
        <img
          src={props.data.flags.png}
          alt={props.data.flags.alt}
          height={100}
        />
        <div class="card-text">
          <h3 class="card-title">{props.data.name.common}</h3>
          {/* 
          <p>
            <b>Name: </b>
            {props.data.name.common}
            <b>Population: </b>
            {population.toLocaleString("en-IN")}
          </p> */}
          <p>
            <b>Capital: </b>
            {props.data.capital}
          </p>
          <p>
            <b>Popuation: </b>
            {props.data.population}
          </p>
        </div>
      </a>
    </div>
  );
}

export default CardData;
