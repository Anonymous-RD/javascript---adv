import React, { useEffect, useState } from "react";

function Api() {
  // useEffect(() => fetchData, [balance]);

  // useEffect(() => {
  const [count, setCount] = useState(0);
  //   fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
  //     response.json().then((json) => console.log(json))
  //   );
  // });

  //no dependency array, so it runs after every render
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return <h1>I've rendered {count} times!</h1>;

  //empty dependency array, so it runs only once after the initial render
  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 100);

  //   return () => clearTimeout(timer);
  // },[]);
}

// return <div>Api</div>;
// }

export default Api;
