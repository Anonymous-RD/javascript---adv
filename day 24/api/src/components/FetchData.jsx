import React from "react";
import Card from "./Card";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";

function FetchData() {
  const [sendData, setSendData] = useState([]);
  const [load, setLoading] = useState(true);

  useEffect(() => {
    async function FetchingData() {
      const response = await fetch(
        "https://restcountries.com/v3.1/independent?status=true"
      );
      const data = await response.json();
      console.log(data);
      setSendData(data);
      setLoading(false);
    }
    FetchingData();
  }, []);

  if (load) return <Loading></Loading>;

  return (
    <div>
      FetchData
      <Card sendData={sendData}></Card>
    </div>
  );
}

export default FetchData;
