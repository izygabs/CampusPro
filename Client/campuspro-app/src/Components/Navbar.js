import React from "react";
import logo from "../images/campuspro(6).png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nb-body">
      <div className="nb-content">
        <div className="nb-img">
          <img src={logo} alt="logo" />
        </div>
        <div className="nb-input">
          <input
            type="text"
            placeholder="Search for ....(fix your own page)"
            // value={searchTerm}
            // onChange={handleSearchChange}
          />
        </div>
        <div className="nb-links">
          <Link>
            <p>Contacts</p>
          </Link>
          <Link>
            <p>About</p>
          </Link>
          <Link>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
