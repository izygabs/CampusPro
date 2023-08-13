import React from "react";
import "./Signup.css";
import key from "./lock_483408.png";
import user from "./MicrosoftTeams-image (4).png";
import email from "./MicrosoftTeams-image (6).png";
import number from "./MicrosoftTeams-image (5).png";
import { Link } from "react-router-dom";

// import gold from './gold.png'

const Signup = () => {
  return (
    <div className="sp-form-one">
      <form className="sp-form">
        <h1>Register</h1>
        <div className="header">
          <label className="sp-label" htmlFor="firstName">
            Firstname:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={user} alt="" />
            {/* <input className="sp-input-testing" type="text" id="name" /> */}
            <input className="sp-input-testing" type="text" id="name" />
          </div>

          <label className="sp-label1" htmlFor="lastName">
            Lastname:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={user} alt="" />
            <input className="sp-input-testing" type="text" id="name" />
          </div>
          {/* <br /> */}

          <label className="sp-email-label" htmlFor="email">
            Email:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={email} alt="" />
            <input className="sp-input-testing" type="text" />
          </div>

          <label className="sp-number1" htmlFor="number">
            Phone number:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={number} alt="" />
            <input className="sp-input-testing" type="number" />
          </div>

          <label className="sp-number3" htmlFor="number">
            Alternate number:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={number} alt="" />
            <input className="sp-input-testing" type="number" />
          </div>

          <label className="sp-pwd1" htmlFor="password">
            Password:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={key} alt="" />
            <input className="sp-input-testing" type="password" />
          </div>

          <label className="sp-pwd3" htmlFor="password">
            Confirm Password:
          </label>
          <br />
          <div className="sp-icon-input">
            <img className="sp-user-img" src={key} alt="" />
            <input className="sp-input-testing" type="password" />
          </div>

          <div id="main">
            <div id="checks">
              <input
                className="sp-type-user"
                type="radio"
                name="User"
                value="agent"
              />
              <label className="sp-agent" for="agent">
                Agent
              </label>
            </div>

            <div id="checks">
              <input
                className="sp-type-user"
                type="radio"
                name="User"
                value="merchant"
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
            <button>
              <Link to="/login">View Details</Link>
            </button>
          </h6>
        </span> */}
        <div className="sp-create-Account-button">
          <button className="sp-btn">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
