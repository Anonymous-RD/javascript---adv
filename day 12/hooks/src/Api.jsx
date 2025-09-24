import React from "react";

function Api() {
  const reposnse = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
  console.log(reposnse);

  return <div>Api</div>;
}

export default Api;
