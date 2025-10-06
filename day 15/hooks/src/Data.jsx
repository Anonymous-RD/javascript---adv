import React, { useEffect, useState } from "react";
import Load from "./Load";

function Data() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((json) => {
        setData(json);
        setLoading(false);
      });
    });
  }, []);
  if (loading) return <Load></Load>;

  let filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery)
  );
  console.log(filteredData);

  return (
    <div>
      <h1>data</h1>
      <input
        type="text"
        onChange={(e) => {
          let searchedData = e.target.value.toLocaleLowerCase();
          setSearchQuery(searchedData);
          // data.includes(searchedData);
        }}
      />
      {data
        .filter((item) => item.name.toLowerCase().includes(searchQuery))
        .map((item) => (
          <ul>
            <li>Name - {item.name}</li>
            <li>Username -{item.username}</li>
          </ul>
        ))}
    </div>
  );
}

export default Data;
