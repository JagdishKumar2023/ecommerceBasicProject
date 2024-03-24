import React from "react";
import logo from "../Assets/icons8-loading-infinity.gif";
import cartIcon from "../Assets/carts.png";
import account from "../Assets/profile.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { FormatColorText } from "@mui/icons-material";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbarLogo">
          {" "}
          <img src={logo} alt="" />
          <h2>Infinity Products</h2>
        </div>
      </Link>

      <div>
        <ul className="navLinks">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/feedback">
            <li>Feedback</li>
          </Link>
          <Link to="/product">
            <li>Product</li>
          </Link>
        </ul>
      </div>

      <div className="leftDiv">
        <Link to="/cart">
          {" "}
          <img src={cartIcon} alt="" />
        </Link>
      </div>

      <Link to="/profile">
        <div className="accountDiv">
          <img src={account} alt="" />{" "}
        </div>
      </Link>

      <div className="loginTag">
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
