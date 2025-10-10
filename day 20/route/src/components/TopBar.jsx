import React from "react";
import { Link } from "react-router-dom";
function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default TopBar;
