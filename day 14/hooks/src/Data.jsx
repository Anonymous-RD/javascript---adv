import React, { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((json) => {
        setData(json);
      });
    });
  }, []);

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
          let searchedData = e.target.value;
          setSearchQuery(searchedData);
          // data.includes(searchedData);
        }}
      />
      {data.map((item) => (
        <ul>
          <li>Name - {item.name}</li>
          <li>Username -{item.username}</li>
        </ul>
      ))}
    </div>
  );
}

export default Data;
