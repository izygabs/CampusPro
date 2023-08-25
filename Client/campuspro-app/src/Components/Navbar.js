import React from "react";
import logo from "../images/campuspro(6).png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nb-body">
      <div className="nb-content">
        <div className="nb-img">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* <div className="nb-input">
          <input
            type="text"
            placeholder="Search for ....(fix your own page)"
            // value={searchTerm}
            // onChange={handleSearchChange}
          />
        </div> */}
        <div className="nb-links">
          <a className="linko" href="#footer">
            <p>Contact</p>
          </a>
          {/* <a className="linko" href="#"> */}
          <Link to="/AboutUs" className="linko">
            <p>About us</p>
            </Link>
          {/* </a> */}
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
