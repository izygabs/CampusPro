import React, { useEffect, useState } from "react";
import logo from "../images/campuspro(6).png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import jwtDecode from "jwt-decode";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const [log, setLog] = useState("Log out");
  const [isTokenExp, setIsTokenExp] = useState(false);

  useEffect(() => {
    fetch("/api/getTokenExpiration", {
      headers: {
        Authorization: "campusProUserToken", // Include your actual token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const token = jwtDecode(data.campusToken);
        // console.log(token);
        if (!token) {
          navigate("/login");
        }
        const expirationTime = token.exp;
        const currentTime = Math.floor(Date.now() / 1000);

        if (expirationTime < currentTime) {
          // Token has expired, redirect to login
          navigate("/login");
        } else setIsTokenExp(true);
        // console.log(data.token);
        // console.log(isTokenExp);
        // Redirect to login if token is expired
      })
      .catch((error) => {
        console.error("Error fetching token status:", error);
      });
  }, [isTokenExp]);

  const logout = async () => {
    const logout = await axios.get("/api/logout");
    if (logout) {
      alert("successful log out");
      setLog("Login");
      navigate("/");
    }
  };

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
          <Link
            to="/Dashboard"
            className={isTokenExp ? "linko" : "dashboardDisplay"}
          >
            <p>Dashboard</p>
          </Link>
          {/* </a> */}
          {/* <Link to={"/login"}>
            <button>Login</button>
          </Link> */}
          <div>
            {!isTokenExp ? (
              <Link to="/login">
                <button className="hp-login-button">Login</button>
              </Link>
            ) : (
              <button className="hp-login-button" onClick={logout}>
                {log}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
