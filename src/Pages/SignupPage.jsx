import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data in local storage
    localStorage.setItem("signupData", JSON.stringify(formData));
    // You can also perform other actions like sending data to a server here
    // For this example, let's just log the data
    console.log(formData);
  };

  return (
    <div className="mainContainer">
      <form onSubmit={handleSubmit} className="formContainer">
        <h2>Signup Page</h2>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="inputTag"
            placeholder="Enter username"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="inputTag"
            placeholder="Enter your Email"
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
            placeholder="Enter Password"
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
        <Link path="/signup">
          <button>
            <p>Click to signup</p>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
