import React from "react";

export default function MainRoute() {
  return (
    <div>
      MainRoute
      <a href="/home">
        {" "}
        <Home />
      </a>
      <a href="/about">
        {" "}
        <About />
      </a>
      <a href="/contact">
        {" "}
        <Contact />
      </a>
    </div>
  );
}
