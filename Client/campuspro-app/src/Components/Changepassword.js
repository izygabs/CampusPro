import React, { useState } from "react";
import "./Changepassword.css";

function Changepassword() {
  const [password, setPwd] = useState("");
  const [newPassword, setNewPwd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="cp-body">
      <div className="cp-sec">
        <div className="cp-head">
          <h2>Login & Security</h2>
        </div>
        <div className="cp-account">
          <h4>Account</h4>
          <p>EMAIL</p>
        </div>
        <div>
          <div className="cp-password">
            <h4>Password</h4>
            <button>Cancel</button>
          </div>
          <div>
            <form className="cp-forms">
              <label>
                Current password:<br></br>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter current password"
                />
              </label>{" "}
              <br></br>
              <label>
                New password: <br></br>
                <input
                  type="password"
                  name="password"
                  value={newPassword}
                  placeholder="Enter new password"
                />
              </label>
              <br></br>
              <label>
                Confirm new password: <br></br>
                <input
                  type="password"
                  name="password"
                  value={confirmPassword}
                  placeholder="Enter new password"
                />
              </label>
            </form>
          </div>
          <button className="cp-btn">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
