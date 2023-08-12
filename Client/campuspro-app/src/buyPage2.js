import React from "react";
import '../src/App.css';
import campus from "../src/images/campuspro(6).png"
import { Link } from "react-router-dom";

const BuyPage2 = () => {
  
  return (
    <>
    <navbar className="bp2-navbar">
      <div className="logo">
      <Link to="/buyPage1" className="logo">
        <img src={campus} alt='house' className="bp2-logo"/>
        </Link>
      </div>
    <div className="bp2-search-bar">
      <input 
          type="Search" 
          className="bp2-input"
          placeholder="Search items..."
          // onChange={(e) => setQuery(e.target.value)}
      />
    </div>
    </navbar>
      <section className="bp2-sec">
        <div className="bp2-desc" id="demo">
          <h1>Property Details</h1>
          <p>Hello</p>
          <p></p>
        </div>

        <div className="bp2-sec-div">
          <h1>Property Details</h1>
          <p>Hello</p>
          <p></p>
        </div>
      </section>
    </>
  )
}


export default BuyPage2;
