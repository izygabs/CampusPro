import { Link } from "react-router-dom";
import location from "./images/location-icon.png";
import React from "react";

function SubRentpage1(props) {
  return (
    <div>
      <div className="sp-sub-div">
        <div className="sp-img-div">
          <img src={`../images/${props.image}`} />
          <div>
            <img className="hp-locate" src={location} />
            <p>{props.campus.toUpperCase()}</p>
          </div>
        </div>
        <div className="sp-text-div">
          <p>{props.description}</p>
          <p>#{props.amount.toLocaleString()}</p>

          <Link className="sp2-linkk" to="/02-rentpage">
            <button>View this property</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SubRentpage1;
