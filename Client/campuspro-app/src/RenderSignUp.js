import { useState } from "react";
import Signup from "./signUp";
import "./Signup.css";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import Google from "./Components/Google";

const RenderSignUp = (prop) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Phone: "",
    altPhoneNumber: "",
    address: "",
    Password: "",
    confirmPassword: "",
  });

  const input = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      // placeholder: 'Firstname',
      errorMessage:
        "First name should be 5-20 characters and should not include any special character",
      label: "Firstname(* Required)",
      pattern: "^[a-zA-Z0-9]{3-16}$",
      require: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      // placeholder: 'Lastname',
      errorMessage:
        "Last name should be 5-20 characters and should not include any special character",
      label: "Lastname*",
      pattern: "^[a-zA-Z0-9]{3-16}$",
      require: true,
    },
    {
      id: 3,
      name: "Email",
      type: "text",
      // placeholder: 'Email',
      errorMessage: "It should be a valid email",
      pattern: "^[a-zA-Z0-9]{3-16}$",
      label: "Email*",
      require: true,
    },
    {
      id: 4,
      name: "Phone",
      type: "text",
      // placeholder: 'Phone number',
      errorMessage:
        "Number should be 1-11 character and should not include any letter character",
      label: "Phone number*",
      pattern: "^((+234)+|0)[7-9]{1}[0-9]{9}$",
      require: true,
    },
    {
      id: 5,
      name: "altPhoneNumber",
      type: "text",
      // placeholder: 'Alternate Number',
      errorMessage:
        "Number should be 1-11 character and should not include any letter character",
      label: "Phone Number 2",
      pattern: "^((+234)+|0)[7-9]{1}[0-9]{9}$",
    },
    {
      id: 7,
      name: "Password",
      type: "password",
      // placeholder: 'Password',
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter and 1 number",
      label: "Password*",
      pattern: `(?=.*[A-Z])[a-zA-Z0-9]+[#@$%&*()><~{}-+=?]+`,
      require: true,
    },
    {
      id: 8,
      name: "confirmPassword",
      type: "password",
      // placeholder: 'Confirm Password',
      errorMessage: "Password does not match ",
      label: "Confirm Password*",
      pattern: values.password,
      require: true,
    },
    {
      id: 8,
      name: "ProfilePic",
      type: "file",
      // placeholder: 'Confirm Password',
      errorMessage: "Upload a profile picture",
      label: "Upload Profile Picture",
      require: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target)
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="sp-main">
      <form onSubmit={prop.handleSubmit} className="signupForm">
        <h1>Sign up</h1>
        {input.map((input) => (
          <Signup
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <Signup name="lastname" placeholder="Lastname"/> */}
        <div className="sp-input-one"></div>
        <div className="sp-radio-box">
          <input
            type="radio"
            id="agent"
            value="Agent"
            name="typeOfUser"
            className="sp-Input"
          />
          <label for="agent" className="sp-label">
            Agent
          </label>
          {/* <label for='agent'>Agent</label> */}

          <input
            type="radio"
            id="merchant"
            value="Merchant"
            name="typeOfUser"
            className="sp-Input"
          />
          <label for="merchant" className="sp-label">
            Merchant
          </label>
          {/* <label for='merchant'>Merchant</label> */}
        </div>
        <button className="signupBtn">Create Account</button>
      </form>
      {/* 
      <div>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <Google />
        </GoogleOAuthProvider>
      </div> */}
    </div>
  );
};
export default RenderSignUp;
