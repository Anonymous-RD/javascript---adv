import React from "react";
import Card from "./Card";
import { useEffect } from "react";
import { useState } from "react";

function FetchData() {
  const [sendData, setSendData] = useState([]);
  useEffect(() => {
    async function FetchingData() {
      const response = await fetch(
        "https://restcountries.com/v3.1/independent?status=true"
      );
      const data = await response.json();
      console.log(data);
      setSendData(data);
    }
    FetchingData();
  }, []);

  return (
    <div>
      FetchData
      <Card sendData={sendData}></Card>
    </div>
  );
}

export default FetchData;
