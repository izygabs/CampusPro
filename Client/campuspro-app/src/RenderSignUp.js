// eslint-disable-next-line
import React, { useState } from "react";
import Modal from "react-modal";
import "./Signup.css";
import key from "./lock_483408.png";
import user from "./MicrosoftTeams-image (4).png";
import email from "./MicrosoftTeams-image (6).png";
import number from "./MicrosoftTeams-image (5).png";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/campuspro(6).png";

// import gold from './gold.png'
// Modal.setAppElement("#root");
const Signup = () => {
  const [message, setMsg] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const navigator = useNavigate();
  const closeModal = () => {
    setModalIsOpen(false);

    navigator("/login");
  };

  const validationSchema = yup.object({
    firstName: yup.string().required(" First name is required"),
    lastName: yup.string().required(" Last name is required"),
    Phone: yup
      .string()
      .required(" Phone number is required")
      .matches(/^((\+234)+|0)[7-9]{1}[0-9]{9}$/, "Invalid phone number"),
    Email: yup
      .string()
      .email("Invalid email: 'example@gmail.com'")
      .required(" Price is required"),
    userType: yup
      .string()
      .oneOf(["Agent", "Merchant"], "Select a valid user type")
      .required("User type is required"),
    Password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      Phone: "",
      Email: "",
      Password: "",
      confirmPassword: "",
      userType: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Handle form submission
      try {
        const response = await fetch("/api/signUp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const result = await response.json();
        switch (response.status) {
          case 201:
            setMsg(result.Message);
            // navigator("/login");
            setIsSignUpSuccessful(true);
            setModalIsOpen(true);
            openModal();

            break;
          case 400:
            alert(result.Message);
            break;
          case 401:
            alert(result.Message);
            break;
          case 403:
            alert(result.Message);
            break;
          default:
            alert(result.Message);
            break;
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
    },
  });

  return (
    <>
      <div className="sp-form-one" id="signUP">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <form className="sp-form" onSubmit={formik.handleSubmit}>
          <h1>Register</h1>
          <div className="header">
            <label className="sp-label" for="firstName">
              Firstname:
            </label>
            <br />
            <div className="sp-icon-input">
              <img className="sp-user-img" src={user} alt="" />

              <input
                name="firstName"
                className="sp-input-testing"
                type="text"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
            </div>
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="signup-error-message">{formik.errors.firstName}</p>
            )}

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </div>
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="signup-error-message">{formik.errors.lastName}</p>
            )}

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email}
              />
            </div>
            {formik.touched.Email && formik.errors.Email && (
              <p className="signup-error-message">{formik.errors.Email}</p>
            )}

            <label className="sp-number1" for="number">
              Phone number:
            </label>
            <br />
            <div className="sp-icon-input">
              <img className="sp-user-img" src={number} alt="" />
              <input
                name="Phone"
                className="sp-input-testing"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Phone}
              />
            </div>
            {formik.touched.Phone && formik.errors.Phone && (
              <p className="signup-error-message">{formik.errors.Phone}</p>
            )}

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Password}
              />
            </div>
            {formik.touched.Password && formik.errors.Password && (
              <p className="signup-error-message">{formik.errors.Password}</p>
            )}

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
            </div>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="signup-error-message">
                  {formik.errors.confirmPassword}
                </p>
              )}

            <div id="main">
              <div id="checks">
                <input
                  className="sp-type-user"
                  type="radio"
                  name="userType"
                  id="agent"
                  value="Agent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.userType === "Agent"}
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.userType === "Merchant"}
                />
                <label className="sp-merchant1" for="merchant">
                  Merchant
                </label>
              </div>
            </div>
            {formik.touched.userType && formik.errors.userType && (
              <p className="signup-error-message">{formik.errors.userType}</p>
            )}
          </div>

          <div className="sp-create-Account-button">
            <button className="sp-btn" type="submit">
              Create Account
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Success Modal"
              className="signUp_modal"
              overlayClassName="signUp_overlayModal"
            >
              <h2>Successful sign-up</h2>
              <p>{message}</p>
              <button onClick={closeModal} className="modalBtn">
                Click to Log in
              </button>
            </Modal>
          </div>

          <p className="sp-registered">
            Already Registered?
            <Link to="/login">
              <a href=".">Login</a>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
