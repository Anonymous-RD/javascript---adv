import React from "react";
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem 0",
        background: "#23263a",
        borderRadius: "0 0 18px 18px",
        marginBottom: "2rem",
        boxShadow: "0 2px 12px #23263a44",
      }}
    >
      <NavLink
        to="/home"
        style={({ isActive, isPending }) => ({
          color: isActive ? "red" : isPending ? "blue" : "#fca311",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.2rem",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive, isPending }) => ({
          color: isActive ? "red" : isPending ? "blue" : "#fca311",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.2rem",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive, isPending }) => ({
          color: isActive ? "red" : isPending ? "blue" : "#fca311",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "1.2rem",
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default TopBar;
