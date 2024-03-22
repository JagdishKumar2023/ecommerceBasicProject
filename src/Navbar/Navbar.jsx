import React from "react";
import logo from "../Assets/icons8-loading-infinity.gif";
import cartIcon from "../Assets/carts.png";
import account from "../Assets/profile.png";
import "./Navbar.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <img src={logo} alt="" />
        <h2>Infinity Products</h2>
      </div>

      <div>
        <ul className="navLinks">
          <li>Home</li>
          <li>About</li>
          <li>Feedback</li>
          <li>Product</li>
        </ul>
      </div>

      <div className="leftDiv">
        <img src={cartIcon} alt="" />
      </div>

      <div className="accountDiv">
        <img src={account} alt="" />
      </div>

      <div className="loginTag">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
