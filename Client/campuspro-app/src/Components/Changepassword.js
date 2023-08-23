import React, { useEffect, useState } from "react";
import "./Changepassword.css";
import { useFormik } from "formik";
import * as yup from "yup";
// import { useParams } from "react-router";

function Changepassword(prop) {
  const [click, setClick] = useState(false);

  const sub = (e) => {
    e.preventDefault();
    // console.log(values);
  };
  const handleEditClicked = (e) => {
    e.preventDefault();
    // console.log("clcik1", clicked);
    if (!click) setClick(true);
    else setClick(false);
  };

  const validationSchema = yup.object({
    currentPassword: yup.string().required("Current Password is required"),

    newPassword: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // Handle form submission
      console.log(values);

      try {
        const response = await fetch(`/api/changePassword/`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        console.log(response);

        const result = await response.json();
        if (response.status === 404) {
          alert(result.message);
        } else if (response.status === 201) {
          alert(result.message);
        } else if (response.status === 417) {
          alert(result.Error);
        }
        resetForm();
      } catch (error) {
        console.error("Error sending password:", error);
      }
      // console.log(values);
    },
  });

  return (
    <div className="cp-body">
      <div className="cp-sec">
        <div className="cp-head">
          <h2>Login & Security</h2>
        </div>
        <div className="cp-account">
          <h4>Account</h4>
          <p>{prop.Email}</p>
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
              <form
                className="cp-forms"
                onSubmit={formik.handleSubmit}
                method="put"
                action="/api/changePassword"
              >
                <label>
                  Current password:<br></br>
                  <input
                    type="password"
                    name="currentPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentPassword}
                    placeholder="Enter your current password"
                  />
                </label>
                {formik.touched.currentPassword &&
                  formik.errors.currentPassword && (
                    <p className="chngPwd-error-message">
                      {formik.errors.currentPassword}
                    </p>
                  )}
                <br></br>
                <label>
                  New password: <br />
                  <input
                    type="password"
                    name="newPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                    placeholder="Enter your new password"
                  />
                </label>
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <p className="chngPwd-error-message">
                    {formik.errors.newPassword}
                  </p>
                )}
                <br />
                <label>
                  Confirm new password: <br />
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    placeholder="Confirm your password"
                  />
                </label>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p className="chngPwd-error-message">
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </form>
              <button className="cp-btn" type="submit" onClick={sub}>
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
