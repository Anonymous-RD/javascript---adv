import React, { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((json) => {
        setData(json);
      });
    });
  }, []);
  return (
    <div>
      <h1>data</h1>
      {data.map((item) => (
        <ul>
          <li>Name - {item.title}</li>
          <li>Username -{item.body}</li>
        </ul>
      ))}
    </div>
  );
}

export default Data;
