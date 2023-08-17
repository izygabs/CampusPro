import logo from "./images/campuspro(6).png";
import house from "./images/house1.jpg";
import React, { useState, useEffect} from "react";

function RentPage2 (props) {
  const [info, setInfo] = useState("");

  return (
    <div className="rentpage-main">
      <div className="hp-header">
        <div className="hp-logo-div">
          <div>
            <img src={logo} className="hp-logo" alt="" />
          </div>
          <div>
            <p>CampusPro</p>
          </div>
        </div>
        {/* <div>
          <input  onChange={sort} placeholder="Search for hostels around your school. example: oou" className="hp-select-button"/>

        </div> */}
        <div>
          <button className="hp-login-button">Login</button>
        </div>
      </div>

      <section className="sp2-main-sector">
        <div className="sp2-divs">
          <img className="sp2-main-img" src={house} alt="" />
        </div>
        <div className="sp2-divs2">
          <p>Description:</p>
          <p>{props.campusName}</p>
          <p>Amount/Annum : {props.price}</p>
          <p>Electricity:</p>
          <p>Furnised:</p>
          <p>Cer Park:</p>
          <p>Agent Name:</p>
          <p>Agent address:</p>
          <p>Campus Address: {props.location} jjj</p>
        </div>
      </section>

      <div className="sp-2-img-div">
        <div>
          <img />
        </div>
        <div>
          <img />
        </div>
        <div>
          <img />
        </div>
        <div>
          <img />
        </div>
        <div>
          <img />
        </div>
      </div>

      <div className="sp2-agent-info">
        <button>view agent contact</button>
      </div>
    </div>
  );
}

export default RentPage2;
