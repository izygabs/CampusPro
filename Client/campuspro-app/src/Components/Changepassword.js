import React, { useState } from "react";
import "./Changepassword.css";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

function Changepassword() {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setErrors] = useState({});

  const Schemas = {
    currentPassword: Joi.string().required().min(8),
    newPassword: Joi.string().required().min(8),
    // .pattern(
    //   new RegExp(/(?=.*[A-Z])[a-zA-Z0-9]+[\#\@\$\%\&\*\(\)\>\<\~\{\}]+/)
    // ),
    // .messages({
    //   "string.pattern.base": `Password must contain atleast one capital letter and one special characters`,
    //   "any.required": `Password field is required`,
    //   "string.min": `Password must be minimum 8 characters`,
    // }),

    confirmPassword: Joi.any().valid(Joi.ref("newPassword")).required(),
    // .messages({
    //   "string.required": "Confirm Password is required",
    //   "any.only": "Passwords do not match",
    //   "password.confirm": `Your passwords no gree`,
    // }),
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = Joi.object({ [name]: Schemas[name] });
    const result = subSchema.validate(obj);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let errorData = { ...error };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
      // !checked && setChecked((prev) => prev);
    } else {
      delete errorData[name];
    }
    let userData = { ...inputValues };
    userData[name] = value;
    setInputValues(userData);
    setErrors(errorData);
    console.log(inputValues);

    console.log(Object.values(inputValues).length);
  };

  // const [password, setPwd] = useState("");
  // const [newPassword, setNewPwd] = useState("");
  // const [confirmPassword, setConfirmPwd] = useState("");
  const [click, setClick] = useState(false);

  const handleEditClicked = (e) => {
    e.preventDefault();
    // console.log("clcik1", clicked);
    if (!click) setClick(true);
    else setClick(false);
  };

  const clearState = () => {
    setInputValues({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/changePassword/:id", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: inputValues }),
      });

      const result = await response.json();
      if (response.status === 404) {
        alert(result.message);
      } else if (response.status === 401) {
        alert(result.message);
        navigate("/login");
      } else if (response.status === 417) {
        alert(result.Error);
        setErrors(result.Error);
      } else if (response.status === 201) {
        alert(result.message);
        clearState();
      }
    } catch (error) {
      console.error("Error sending password:", error);
    }
  };
  // useEffect(() => {
  //   fetch("http://localhost:6600/newPassword")
  //     .then((res) => res.json())
  //     .then((data) => setNewPwd(data.newPassword));
  // }, []);

  return (
    <div className="cp-body">
      <div className="cp-sec">
        <div className="cp-head">
          <h2>Login & Security</h2>
        </div>
        <div className="cp-account">
          <h4>Account</h4>
          <p>{"EMAIL"}</p>
        </div>
        <div>
          <div className="cp-password">
            <h4>Password</h4>
            <button onClick={handleEditClicked}>
              {!click ? "Change" : "Cancel"}
            </button>
          </div>
          {!click ? (
            <hr className="cp-hr" />
          ) : (
            <div>
              <form className="cp-forms">
                <label>
                  Current password:<br></br>
                  <input
                    type="password"
                    name="currentPassword"
                    value={inputValues.currentPassword}
                    onChange={handleInputChange}
                    placeholder="Enter current password"
                  />
                </label>
                {error.firstName && (
                  <p className="signup-error-message">
                    {error.currentPassword}
                  </p>
                )}
                <br></br>
                <label>
                  New password: <br></br>
                  <input
                    type="password"
                    name="newPassword"
                    value={inputValues.newPassword}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                  />
                </label>
                <br></br>
                <label>
                  Confirm new password: <br></br>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={inputValues.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                  />
                </label>
              </form>
              <button className="cp-btn" type="submit" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
