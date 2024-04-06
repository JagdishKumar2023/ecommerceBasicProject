import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUser &&
      storedUser.username === formData.username &&
      storedUser.password === formData.password
    ) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setFormData({
      username: "",
      password: "",
    });
    localStorage.removeItem("userData");
  };

  //   const handleClearError = () => {
  //     setError("");
  //   };

  //   const handleSaveUserData = () => {
  //     localStorage.setItem("userData", JSON.stringify(formData));
  //   };

  return (
    <div className="mainContainerOfLogin">
      {loggedIn ? (
        <div className="loginMainContainer">
          <h2>Welcome, {formData.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="formContainer">
          <label>
            <h2 className="loginContainer">Login</h2>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="inputField"
              placeholder="Enter username "
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </label>
          <br />
          <button type="submit">Login</button>
          {error && <div>{error}</div>}
          <Link to="/signup">
            {" "}
            <button>Click her to signup</button>
          </Link>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
