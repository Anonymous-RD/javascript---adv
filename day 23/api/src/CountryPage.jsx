import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
function CountryPage() {
  const [countryData, setCountryData] = useState([]);
  const url = new URLSearchParams(window.location.search).get("name");
  console.log(url);

  useEffect(() => {
    async function FetchingData() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${url}?fullText=true`
      );
      const data = await response.json();
      console.log("data", data);
      setCountryData(data[0]);
    }
    FetchingData();
  }, [url]);
  if (countryData.length === 0) return <Loading></Loading>;
  let keyData = countryData.languages;
  let kData = Object.keys(keyData);
  let vData = Object.values(keyData);
  console.log(vData[0]);
  console.log(kData[0]);

  console.log(countryData.region);
  return (
    <div>
      hii from CountryPage
      <br />
      <img src={countryData.flags.png} alt="img" />
      <h1>name- {countryData.name.common} </h1>
      <h1>Population - {countryData.population} </h1>
      <h1>Timezones - {countryData.timezones}</h1>
      <h1>Region - {countryData.region} </h1>
      <h1>Languages- {vData[0]} </h1>
      <h1>Currencies </h1>
    </div>
  );
}

export default CountryPage;
