import React, { useContext } from "react";
import logo from "../Assets/icons8-loading-infinity.gif";
import cartIcon from "../Assets/carts.png";
import account from "../Assets/profile.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
// import LoginPage from "../Pages/LoginPage";
// import DataDisplay from "../DataDisplay/DataDisplay";
// import { FormatColorText } from "@mui/icons-material";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <>
      <div className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbarLogo">
            {" "}
            <img src={logo} alt="" />
            <h2>Infinity Products</h2>
          </div>
        </Link>

        <div>
          <ul className="navLinks">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li>About</li>
            </Link>
            <Link to="/feedback" style={{ textDecoration: "none" }}>
              <li>Feedback</li>
            </Link>
            <Link to="/product" style={{ textDecoration: "none" }}>
              <li>Product</li>
            </Link>
          </ul>
        </div>

        <div className="leftDiv">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            {totalItems}
            <img src={cartIcon} alt="" />
          </Link>
        </div>

        <Link to="/profile" style={{ textDecoration: "none" }}>
          <div className="accountDiv">
            <img src={account} alt="" />{" "}
          </div>
        </Link>

        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="loginTag">
            <button>Login</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
