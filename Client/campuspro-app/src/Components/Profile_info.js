import React, { useEffect, useRef, useState } from "react";
import "./Profile_info.css";
import pic from "../images/house2.jpg";
import axios from "axios";

function ProfileInfo(prop) {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [imgSrc, setImageScr] = useState(pic);
  const fileUpload = useRef(null);
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const results = await axios.get("/api/user/:id");
        setUserProfile(results.data.Profile);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  const handleEditClicked = (e) => {
    e.preventDefault();
    // console.log("clcik1", clicked);
    if (!clicked) setClicked(true);
    else setClicked(false);

    // console.log("clcik1", clicked);
  };
  const handleEditClicked2 = (e) => {
    e.preventDefault();
    // console.log(userProfile);
    if (!clicked2) setClicked2(true);
    else setClicked2(false);
    // console.log("click2", clicked2);
  };
  const handleEditClicked3 = (e) => {
    e.preventDefault();
    if (!clicked3) setClicked3(true);
    else setClicked3(false);
    // console.log("click3", clicked3);
  };

  const uploadFile = (e) => {
    fileUpload.current.click();
    // setImageScr(e.target.value);
    // console.log(imgSrc);
  };

  const displayProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) setImageScr(URL.createObjectURL(file));
  };
  return (
    <div className="pi-body">
      <section className="pi-sec">
        <div className="pi-head">
          <h2>Personal info</h2>
        </div>
        <div>
          <input
            type="file"
            name="ProfilePic"
            accept="image/*"
            ref={fileUpload}
            id="uploadImage"
            onChange={displayProfilePic}
          />
          {imgSrc ? (
            <img
              src={imgSrc}
              alt="profilepic"
              className="pi-pic"
              onClick={uploadFile}
            />
          ) : (
            <img
              src={userProfile.profilePic || pic}
              alt="profilepic"
              className="pi-pic"
              onClick={uploadFile}
            />
          )}
        </div>
        <div className="pi-input">
          <div className="pi-div">
            <label>First name</label> <br></br>
            <button onClick={handleEditClicked}>
              {!clicked ? "Edit" : "Cancel"}
            </button>
          </div>
          {!clicked ? (
            <p className="pi-para">{userProfile.firstName}</p>
          ) : (
            <div>
              <input
                type="text"
                name="name"
                placeholder={userProfile.firstName}
              />
              <br />
              <br />
              <button className="pi-btn">Confirm</button>
            </div>
          )}
        </div>
        <div className="pi-input">
          <div className="pi-div">
            <label>Last name</label> <br></br>
            <button onClick={handleEditClicked2}>
              {!clicked2 ? "Edit" : "Cancel"}
            </button>
          </div>
          {!clicked2 ? (
            <p className="pi-para">{userProfile.lastName}</p>
          ) : (
            <div>
              <input
                type="text"
                name="name"
                placeholder={userProfile.lastName}
              />
              <br />
              <br />
              <button className="pi-btn">Confirm</button>
            </div>
          )}
        </div>
        <div className="pi-input">
          <div className="pi-div">
            <label>Contact Informations</label> <br></br>
            <button onClick={handleEditClicked3}>
              {!clicked3 ? "Edit" : "Cancel"}
            </button>
          </div>
          {!clicked3 ? (
            <div>
              <p className="pi-para">{"+" + userProfile.phoneNumber}</p>
              <p className="pi-para">{userProfile.email}</p>
            </div>
          ) : (
            <div>
              <input
                type="tel"
                name="name"
                placeholder={"+" + userProfile.phoneNumber}
              />
              <input type="email" name="name" placeholder={userProfile.email} />
              <br />
              <br />
              <button className="pi-btn">Confirm</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProfileInfo;
