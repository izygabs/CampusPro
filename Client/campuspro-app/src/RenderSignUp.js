// // eslint-disable-next-line
// import React, { useState } from "react";
// import "./Signup.css";
// import key from "./lock_483408.png";
// import user from "./MicrosoftTeams-image (4).png";
// import email from "./MicrosoftTeams-image (6).png";
// import number from "./MicrosoftTeams-image (5).png";
// // import Joi from "joi";
// // import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import Login from "./Components/Login";

// // import gold from './gold.png'

// const Signup = () => {
//   const [inputValues, setInputValues] = useState({
//     firstName: "",
//     lastName: "",
//     Phone: "",
//     Email: "",
//     Password: "",
//     confirmPassword: "",
//     userType: "",
//   });

//   const [error, setErrors] = useState({});
//   const [checked, setChecked] = useState(false);
//   const [buttonChecked, setBtnChecked] = useState("");

//   const Schemas2 = {
//     firstName: Joi.string().required().trim().messages({
//       "string.base": `First name should be a text`,
//       "string.empty": `Firstname cannot be empty`,
//       "any.required": `Firstname field is required`,
//     }),
//     lastName: Joi.string().required().trim().messages({
//       "string.base": `Lastname should be a text`,
//       "string.empty": `Lastname cannot be empty`,
//       "any.required": `Lastname field is required`,
//     }),
//     Phone: Joi.string()
//       .trim()
//       .required()
//       .pattern(new RegExp(/^((\+234)+|0)[7-9]{1}[0-9]{9}$/))
//       .messages({
//         "string.pattern.base": `Invalid phone number`,
//         "any.required": "phone Number must not be empty",
//       }),

//     Email: Joi.string()
//       .trim()
//       .email({ tlds: { allow: false } })
//       .required()
//       .messages({
//         "string.email": `Invalid email: 'example@gmail.com'`,
//         "any.required": `Email is required`,
//         "string.empty": `Email cannot be empty`,
//       }),
//     Password: Joi.string()
//       .required()
//       .min(8)
//       .pattern(
//         new RegExp(/(?=.*[A-Z])[a-zA-Z0-9]+[\#\@\$\%\&\*\(\)\>\<\~\{\}]+/)
//       )
//       .messages({
//         "string.pattern.base": `Password must contain atleast one capital letter and one special characters`,
//         "any.required": `Password field is required`,
//         "string.min": `Password must be minimum 8 characters`,
//       }),

//     confirmPassword: Joi.any().valid(Joi.ref("Password")).required().messages({
//       "string.required": "Confirm Password is required",
//       "any.only": "Passwords do not match",
//       "password.confirm": `Your passwords no gree`,
//     }),

//     userType: Joi.string().required().trim().messages({
//       "string.base": `Select your type of user`,
//       "string.empty": `You must select type of user`,
//       "any.required": `user type is required`,
//     }),
//   };
//   // const confirmPwd = (e) => {
//   //   const { name, value } = e.target;

//   //   e.preventDefault();
//   //   if (password !== PASSWORD) {
//   //   }
//   // };
//   const validateForm = (event) => {
//     event.preventDefault();
//     const result = Schemas2.validate(inputValues, { abortEarly: false });
//     console.log(result);
//     const { error } = result;
//     if (!error) {
//       return null;
//     } else {
//       const errorData = {};
//       for (let item of error.details) {
//         const name = item.path[0];
//         const message = item.message;
//         errorData[name] = message;
//       }
//       console.log(error);
//       setErrors(errorData);
//       return errorData;
//     }
//   };
//   const validateProperty = (event) => {
//     const { name, value } = event.target;
//     const obj = { [name]: value };
//     const subSchema = Joi.object({ [name]: Schemas2[name] });
//     const result = subSchema.validate(obj);
//     const { error } = result;
//     return error ? error.details[0].message : null;
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     let errorData = { ...error };
//     const errorMessage = validateProperty(event);
//     if (errorMessage) {
//       errorData[name] = errorMessage;
//       // !checked && setChecked((prev) => prev);
//     } else {
//       delete errorData[name];
//     }
//     let userData = { ...inputValues };
//     userData[name] = value;
//     setInputValues(userData);
//     setErrors(errorData);
//     console.log(inputValues);

//     console.log(Object.values(inputValues).length);
//   };

//   const handleCheckedButton = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let userData = { ...inputValues };
//     userData[name] = value;
//     setInputValues(userData);
//     // setInputValues((preValues) => ({
//     //   ...preValues,
//     //   [name]: value,
//     // }));
//     console.log(Object.values(inputValues).length);
//     console.log(inputValues);

//     !checked && setChecked((prev) => !prev);
//   };

//   const resetCheckedButton = (e) => {
//     e.preventDefault();
//     setBtnChecked(null);
//   };

//   const clearState = () => {
//     setInputValues({
//       firstName: "",
//       lastName: "",
//       Phone: "",
//       // altPhoneNumber: "",
//       Email: "",
//       Password: "",
//       confirmPassword: "",
//       userType: "",
//     });
//     setErrors({});
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/signUp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ data: inputValues }),
//       });

//       const result = await response.json();
//       if (response.status === 401) {
//         alert(result.Message);
//       } else if (response.status === 400) {
//         alert(result.Errors);
//         setErrors(result.Errors);
//       } else if (response.status === 403) {
//         alert(result.Message);
//       } else if (response.status === 201) {
//         alert(result.Message);
//         clearState();
//       } else {
//         clearState();
//         resetCheckedButton();
//         <Link to="/login">
//           {alert(result.message)}
//           <Login />
//         </Link>;
//       }
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   return (
//     <div className="sp-form-one">
//       <form className="sp-form" onSubmit={handleSubmit}>
//         <h1>Register</h1>
//         <div className="header">
//           <label className="sp-label" for="firstName">
//             Firstname:
//           </label>
//           <br />
//           <div className="sp-icon-input">
//             <img className="sp-user-img" src={user} alt="" />
//             {/* <input className="sp-input-testing" type="text" id="name" /> */}
//             <input
//               name="firstName"
//               className="sp-input-testing"
//               type="text"
//               id="name"
//               value={inputValues.firstName}
//               onChange={handleInputChange}
//             />
//           </div>

//           {error.firstName && (
//             <p className="signup-error-message">{error.firstName}</p>
//           )}

//           <label className="sp-label1" for="lastName">
//             Lastname:
//           </label>
//           <br />
//           <div className="sp-icon-input">
//             <img className="sp-user-img" src={user} alt="" />
//             <input
//               name="lastName"
//               className="sp-input-testing"
//               type="text"
//               id="name"
//               value={inputValues.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//           {error.lastName && (
//             <p className="signup-error-message">{error.lastName}</p>
//           )}

//           <label className="sp-email-label" for="email">
//             Email:
//           </label>
//           <br />
//           <div className="sp-icon-input">
//             <img className="sp-user-img" src={email} alt="" />
//             <input
//               name="Email"
//               className="sp-input-testing"
//               type="text"
//               value={inputValues.Email}
//               onChange={handleInputChange}
//             />
//           </div>
//           {error.Email && <p className="signup-error-message">{error.Email}</p>}

//           <label className="sp-number1" for="number">
//             Phone number:
//           </label>
//           <br />
//           <div className="sp-icon-input">
//             <img className="sp-user-img" src={number} alt="" />
//             <input
//               name="Phone"
//               className="sp-input-testing"
//               type="tel"
//               value={inputValues.Phone}
//               onChange={handleInputChange}
//             />
//           </div>
//           {error.Phone && <p className="signup-error-message">{error.Phone}</p>}

//           {/* <label className="sp-number3" for="number">
//             Alternate number:
//           </label>
//           <br />
//           <div className="sp-icon-input">
//             <img className="sp-user-img" src={number} alt="" />
//             <input
//               name="altPhoneNumber"
//               className="sp-input-testing"
//               type="tel"
//               value={inputValues.altPhoneNumber}
//               onChange={handleInputChange}
//             />
//           </div>

//           {error.altPhoneNumber && (
//             <p className="signup-error-message">{error.altPhoneNumber}</p>
//           )} */}

//           <label className="sp-pwd1" for="password">
//             Password:
//           </label>
//           <br />
//           <div className="sp-icon-input">
//             <img className="sp-user-img" src={key} alt="" />
//             <input
//               name="Password"
//               id="password"
//               className="sp-input-testing"
//               type="password"
//               value={inputValues.Password}
//               onChange={handleInputChange}
//             />
//           </div>
//           {error.Password && (
//             <p className="signup-error-message">{error.Password}</p>
//           )}

//           <label className="sp-pwd3" for="confirmPassword">
//             Confirm Password:
//           </label>
//           <br />
//           <div className="sp-icon-input">
//             <img className="sp-user-img" src={key} alt="" />
//             <input
//               name="confirmPassword"
//               id="confirmPassword"
//               className="sp-input-testing"
//               type="password"
//               value={inputValues.confirmPassword}
//               onChange={handleInputChange}
//             />
//           </div>

//           {error.confirmPassword && (
//             <p className="signup-error-message">
//               {inputValues.Password === inputValues.confirmPassword
//                 ? ""
//                 : error.confirmPassword}
//             </p>
//           )}

//           <div id="main">
//             <div id="checks">
//               <input
//                 className="sp-type-user"
//                 type="radio"
//                 name="userType"
//                 id="agent"
//                 value="Agent"
//                 onChange={handleCheckedButton}
//                 // checked={buttonChecked === "Agent"}
//               />
//               <label className="sp-agent" for="agent">
//                 Agent
//               </label>
//             </div>

//             <div id="checks">
//               <input
//                 className="sp-type-user"
//                 type="radio"
//                 name="userType"
//                 id="merchant"
//                 value="Merchant"
//                 onChange={handleCheckedButton}
//                 // checked={buttonChecked === "Merchant"}
//               />
//               <label className="sp-merchant1" for="merchant">
//                 Merchant
//               </label>
//             </div>
//           </div>
//           {error.userType && (
//             <p className="signup-error-message">{error.userType}</p>
//           )}
//         </div>

//         <div className="sp-create-Account-button">
//           <button
//             className={!checked ? " sp-btn-inactive" : "sp-btn"}
//             disabled={!checked ? true : false}
//             type="submit"
//             onClick={handleSubmit}
//           >
//             Create Account
//           </button>
//         </div>

//         <p className="sp-registered">
//           Already Registered?
//           <Link to="/login">
//             <a href=".">Login</a>
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;
