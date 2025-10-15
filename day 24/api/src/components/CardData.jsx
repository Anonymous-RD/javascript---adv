import React from "react";
import "./CardData.css";
import { Link } from "react-router-dom";

function CardData(props) {
  const name = props.data.name.common;
  const favorited = props.favorited;
  return (
    <div className="card-wrapper">
      <Link
        className="country-card"
        to={`/countrypage?name=${encodeURIComponent(name)}`}
      >
        <img
          src={props.data.flags.png}
          alt={props.data.flags.alt}
          height={100}
        />
        <div className="card-text">
          <h3 className="card-title">{props.data.name.common}</h3>
          <p>
            <b>Capital: </b>
            {props.data.capital}
          </p>
          <p>
            <b>Population: </b>
            {props.data.population}
          </p>
        </div>
        {favorited ? <div className="fav-badge">★</div> : null}
      </Link>
    </div>
  );
}

export default CardData;
