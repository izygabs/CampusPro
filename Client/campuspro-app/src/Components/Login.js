import React, { useState } from "react";
import "../Bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import Google from "./Google";

import { Link } from "react-router-dom";
const Login = () => {
  // const [email, setEmail] =useState("");
  const [inputValues, setInputValues] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };
  return (
    <div class="d-flex align-items-center  py-5 bg-body-tertiary signinPage">
      <main class="form-signin w-100 m-auto">
        <form action="" method="post" className="login-form">
          <h1 class="h3 mb-3 fw-normal text-white">Please sign in</h1>

          <div class="form-floating py-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating py-1">
            <input
              type="password"
              class="form-control "
              id="floatingPassword"
              placeholder="Password"
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
            <label class="form-check-label text-white " for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <Link to="/Dashboard">
            <button class="btn btn-warning w-100 py-2 createBtn " type="submit">
              Login
            </button>
          </Link>

          <p class="mt-4 mb-3 text-center text-body-secondary">
            <Link to="/Signup" className="create-account-link">
              <p id="create-account">Create an Account?</p>
            </Link>
            <a href="." class="forget-pwd">
              Forget Password
            </a>
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
  );
};

export default Login;