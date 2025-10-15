import React from "react";
import CardData from "./CardData";
import "./Card.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

function Card(props) {
  const [edata, setEdata] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const data = props.sendData;
  let favs = [];
  try {
    favs = JSON.parse(localStorage.getItem("fav_countries") || "[]");
  } catch (e) {
    favs = [];
  }

  function authHandler() {
    setIsLoggedIn(!isLoggedIn);
  }

  //   console.log("props", props.sendData);
  return (
    <div id="card">
      {/* <span>Find : </span> */}
      <span> </span>
      <BsSearch size={30} style={{ padding: "0 10px " }} />
      <input
        type="text"
        onChange={(e) => {
          // console.log(e.target.value);
          let searchedData = e.target.value.toLowerCase();
          setEdata(searchedData);
        }}
      />{" "}
      <button onClick={authHandler}>
        {!isLoggedIn ? <CiLogin /> : <CiLogout />}
      </button>
      <div class="countries">
        {data
          .filter((country) =>
            country.name.common.toLowerCase().includes(edata)
          )
          .map((country) => {
            const isFav = favs.includes(country.name.common);
            return <CardData data={country} favorited={isFav} />;
          })}
      </div>
    </div>
  );
}

export default Card;
