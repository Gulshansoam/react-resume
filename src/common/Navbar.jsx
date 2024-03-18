import React from "react";
import "../assets/styles/navbar.css";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
 
  return (
    <div>
      <nav className="navbar-container">
        <div className="image-logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>Counter App</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
