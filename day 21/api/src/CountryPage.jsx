import React from "react";

function CountryPage() {
  const url = new URLSearchParams(document.location.search).get("name");
  console.log(url);
  return (
    <div>
      hii from CountryPage
      <br />
      <img src="" alt="img" />
      <h1>name- {url} </h1>
      <h1>Country </h1>
      <h1>Population </h1>
      <h1>Timezones </h1>
      <h1>Region </h1>
      <h1>Languages </h1>
      <h1>Currencies </h1>
    </div>
  );
}

export default CountryPage;
