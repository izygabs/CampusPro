import React from "react";
import logo from "./images/campuspro(6).png";
import datae from "./data";
import { useState } from "react";
import SubRentpage1 from "./subRentPage1";
import { Link } from "react-router-dom";

function RentPage1() {
  const [data1, setData1] = useState(datae);
  const subRent = data1.map((ie) => {
    return <SubRentpage1 key={ie.id} {...ie} />;
  });
  // a function to sort houses according to the campus name the user inputs into the input
  function sort(e) {
    // e.preventDefault()
    const searchs = e.target.value;
    console.log(searchs);

    if (searchs) {
      let sorting = data1.filter((ei) =>
        ei.campus.toLowerCase().startsWith(searchs.toLowerCase())
      );
      setData1(sorting);
    } else {
      setData1(datae);
    }
  }

  // a function to sort houses according to thier prices
  function sortPrice(e) {
    setData1(datae);

    const prc = Number(e.target.value);

    console.log(prc);

    if (prc) {
      let srtprice = data1.filter((ea) => ea.amount <= prc);

      setData1(srtprice);
    } else {
      setData1(datae);
    }
  }

  return (
    <div>
      <div className="hp-header">
        <div className="hp-logo-div">
          <div>
            <Link to="/">
              <img src={logo} className="hp-logo" />
            </Link>
          </div>
          <div>
            <p>CampusPro</p>
          </div>
        </div>
        <div>
          <input
            onChange={sort}
            placeholder="Search for hostels around your school. example: oou"
            className="hp-select-button"
          />
        </div>
        <div>
          <Link to="/login-page">
            <button className="hp-login-button">Login</button>
          </Link>
        </div>
      </div>

      <select className="sp-select-amount" onChange={sortPrice}>
        <option value="">Filter hostels according to their prices</option>
        <option value="2500000">#2,500,000 & below</option>
        <option value="1000000">#1,000,000 & below</option>
        <option value="500000">#500,000 & below</option>
        <option value="200000">#200,000 & below</option>
      </select>

      <div className="sp-subrent-div">{subRent}</div>
    </div>
  );
}

export default RentPage1;
