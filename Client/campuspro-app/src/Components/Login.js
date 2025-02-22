import React, { useState } from "react";
import "../Bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import Google from "./Google";
import jwtDecode from "jwt-decode";
import logo from "../images/campuspro(6).png";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const [msg, setMsg] = useState("");
  const [isError, setError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [inputValues, setInputValues] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let userData = { ...inputValues };
    userData[name] = value;
    setInputValues(userData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValues),
      });
      const result = await response.json();
      // const token = jwtDecode(result.jwtToken);
      // setJwtToken(token);
      // console.log(result);

      switch (response.status) {
        case 200:
          alert(result.Message);

          navigator("/Dashboard");
          // state: { userID, email, userType, userName },
          // });
          break;
        case 401:
          setMsg(result.Message);
          setError(true);
          break;
        case 417:
          setMsg(result.Message);
          setError(true);

          break;
        case 403:
          setMsg(result.Message);
          setError(true);

          break;
        default:
          setMsg(result.Message);
          setError(true);

          break;
      }

      // if (rememberMe) {
      //   // Store the token in local storage
      //   localStorage.setItem("token", token);
      // } else {
      //   // Use session-based token
      //   sessionStorage.setItem("token", token);
      // }
    } catch (error) {
      console.log("Error in login ", error);
    }
  };

  return (
    <>
      <div class="d-flex align-items-center  py-5 bg-body-tertiary signinPage ">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <main class="form-signin w-100 m-auto">
          <form
            to="/Dashboard"
            onSubmit={handleLogin}
            method="Post"
            className="login-form"
          >
            <h1 class="h3 mb-3 fw-normal text-white">Please sign in</h1>
            <p className="login-error-message">{isError ? msg : ""}</p>
            <div class="form-floating py-3">
              <input
                name="Email"
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={handleInputChange}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating py-1">
              <input
                name="Password"
                type="password"
                class="form-control "
                id="floatingPassword"
                placeholder="Password"
                onChange={handleInputChange}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3 pb-2">
              <input
                class="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label
                class="form-check-label text-white "
                for="flexCheckDefault"
              >
                Remember me
              </label>
            </div>
            {/* <Link to="/Dashboard"> */}
            <button
              class="btn btn-warning w-100 py-2 createBtn "
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
            {/* </Link> */}

            <p class="mt-4 mb-3 text-center text-body-secondary">
              <Link to="/Signup" className="create-account-link">
                <p id="create-account">Create an Account?</p>
              </Link>
              {/* <a href="" class="forget-pwd">
                Forget Password
              </a> */}
            </p>
          </form>

          <p class="mt-5 mb-3 text-center year-display">
            &copy; {new Date().getFullYear()}
          </p>
        </main>
        {/* <div class="googleLogin">
        <GoogleOAuthProvider
          clientId={process.env.REACT_APP_CLIENT_ID}
          className="innerGoogle"
        >
          <Google />
        </GoogleOAuthProvider>
      </div> */}
      </div>
    </>
  );
};

export default Login;
