import React from "react";
import "./Profile_info.css";
import pic from "../images/oso.jpg";

function ProfileInfo() {
  return (
    <div className="pi-body">
      <section className="pi-sec">
        <div className="pi-head">
          <h2>Personal info</h2>
        </div>
        <div>
          <img src={pic} alt="profilepic" className="pi-pic" />
        </div>
        <div className="pi-input">
          <div className="pi-div">
            <label>First name</label> <br></br>
            <button>Edit</button>
          </div>
          <input type="text" name="name" value={""} />
        </div>
        <div className="pi-input">
          <div className="pi-div">
            <label>Last name</label> <br></br>
            <button>Edit</button>
          </div>
          <input type="text" name="text" value={""} />
        </div>
        <div className="pi-input">
          <div className="pi-div">
            <label>Contact Informations</label> <br></br>
            <button>Edit</button>
          </div>
          <input type="text" name="message" value={""} />
        </div>
      </section>
    </div>
  );
}

export default ProfileInfo;
