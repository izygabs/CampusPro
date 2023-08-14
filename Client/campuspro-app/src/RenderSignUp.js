import React, { useState } from "react";
import "./Signup.css";
import key from "./lock_483408.png";
import user from "./MicrosoftTeams-image (4).png";
import email from "./MicrosoftTeams-image (6).png";
import number from "./MicrosoftTeams-image (5).png";
import { Link } from "react-router-dom";

// import gold from './gold.png'

const Signup = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    Phone: "",
    altPhoneNumber: "",
    Email: "",
    Password: "",
    confirmPassword: "",
    userType: "",
    merchant: "",
  });

  const [error, setError] = useState({});
  const [checked, setChecked] = useState(false);

  const handleCheckedButton = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
    !checked && setChecked((prev) => !prev);
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  return (
    <div className="sp-form-one">
      <form className="sp-form">
        <h1>Register</h1>
        <div className="header">
          <label className="sp-label" for="firstName">
            Firstname:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={user} alt="" />
            {/* <input className="sp-input-testing" type="text" id="name" /> */}
            <input
              name="firstName"
              className="sp-input-testing"
              type="text"
              id="name"
              value={inputValues.firstName}
              onChange={handleInputChange}
            />
          </div>

          <label className="sp-label1" for="lastName">
            Lastname:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={user} alt="" />
            <input
              name="lastName"
              className="sp-input-testing"
              type="text"
              id="name"
              value={inputValues.lastName}
              onChange={handleInputChange}
            />
          </div>
          {/* <br /> */}

          <label className="sp-email-label" for="email">
            Email:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={email} alt="" />
            <input
              name="Email"
              className="sp-input-testing"
              type="text"
              value={inputValues.Email}
              onChange={handleInputChange}
            />
          </div>

          <label className="sp-number1" for="number">
            Phone number:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={number} alt="" />
            <input
              name="Phone"
              className="sp-input-testing"
              type="number"
              value={inputValues.Phone}
              onChange={handleInputChange}
            />
          </div>

          <label className="sp-number3" for="number">
            Alternate number:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={number} alt="" />
            <input
              name="altPhoneNumber"
              className="sp-input-testing"
              type="number"
              value={inputValues.altPhoneNumber}
              onChange={handleInputChange}
            />
          </div>

          <label className="sp-pwd1" for="password">
            Password:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={key} alt="" />
            <input
              name="Password"
              id="password"
              className="sp-input-testing"
              type="password"
              value={inputValues.Password}
              onChange={handleInputChange}
            />
          </div>

          <label className="sp-pwd3" for="confirmPassword">
            Confirm Password:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={key} alt="" />
            <input
              name="confirmPassword"
              id="confirmPassword"
              className="sp-input-testing"
              type="password"
              value={inputValues.confirmPassword}
              onChange={handleInputChange}
            />
          </div>

          <div id="main">
            <div id="checks">
              <input
                className="sp-type-user"
                type="radio"
                name="userType"
                id="agent"
                value="Agent"
                onClick={handleCheckedButton}
                // checked={checked}
              />
              <label className="sp-agent" for="agent">
                Agent
              </label>
            </div>

            <div id="checks">
              <input
                className="sp-type-user"
                type="radio"
                name="userType"
                id="merchant"
                value="Merchant"
                onClick={handleCheckedButton}
                // checked={checked}
              />
              <label className="sp-merchant1" for="merchant">
                Merchant
              </label>
            </div>
          </div>
        </div>
        {/* <span className="sp-signup">
          <h6>
            already signup?{" "}
            <button disabled={isChecked}>
              <Link to="/login">View Details</Link>
            </button>
          </h6>
        </span> */}
        <div className="sp-create-Account-button">
          <button
            className="sp-btn"
            disabled={!checked ? true : false}
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
