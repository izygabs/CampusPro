import React, { useState } from "react";
import "./Changepassword.css";

function Changepassword(prop) {
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
              <form className="cp-forms">
                <label>
                  Current password:<br></br>
                  <input
                    type="password"
                    name="password"
                    // value={password}
                    placeholder="Enter current password"
                  />
                </label>
                <br></br>
                <label>
                  New password: <br></br>
                  <input
                    type="password"
                    name="password"
                    // value={newPassword}
                    placeholder="Enter new password"
                  />
                </label>
                <br></br>
                <label>
                  Confirm new password: <br></br>
                  <input
                    type="password"
                    name="password"
                    // value={confirmPassword}
                    placeholder="Enter new password"
                  />
                </label>
              </form>
              <button className="cp-btn">Confirm</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
