import React from "react";
import { NavLink } from "react-router-dom";

function Link1() {
  const activeStyle = { fontWeight: "bold", textDecoration: "underline" };

  return (
    <header>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Contact
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Login
        </NavLink>
        <NavLink
          to="/register"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Register
        </NavLink>
      </nav>
    </header>
  );
}

export default Link1;
