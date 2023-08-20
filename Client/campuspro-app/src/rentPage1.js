import React from "react";
import logo from "./images/campuspro(6).png";

import { useState, useEffect } from "react";
// import SubRentpage1 from "./subRentPage1";
import { Link } from "react-router-dom";
import location from "./images/location-icon.png";
import RentPage2 from "./rentPage2"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function RentPage1() {
  const [data11, setData11] = useState([]);
  // const [click, setClick] = useState([]);

//using the hook to display the fetch data on load
  useEffect(()=>{
      fetcher2()
    },[] 
  )
  
  //function to fetch properties from the database
  const url= "/api/allProperties"
  const fetcher2 = async()=> {
    try {
      const info = await fetch(url)
      const data2 = await info.json()
      const result = data2.Properties
      setData11(result)
      console.log(result)
      
    } catch (error) {
      console.log(error)
    }
  }


  // const subRent = data11.map((ie) => {
  //   return <SubRentpage1 key={ie.id} {...ie} />;
  // });
  // a function to sort houses according to the campus name the user inputs into the input
  function sort(e) {
    // e.preventDefault()
    const searchs = e.target.value;
    console.log(searchs);

    if (searchs) {
      let sorting = data11.filter((ei) =>
        ei.campus.toLowerCase().startsWith(searchs.toLowerCase())
      );
      setData11(sorting);
    } else {
      setData11(data11);
    }
  }

  // a function to sort houses according to thier prices
  function sortPrice(e) {
    setData11(data11);

    const prc = Number(e.target.value);

    console.log(prc);

    if (prc) {
      let srtprice = data11.filter((ea) => ea.amount <= prc);

      setData11(srtprice);
    } else {
      setData11(data11);
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
        </div>
        <div>
          <input
            onChange={sort}
            placeholder="Search for hostels around your school. example: oou"
            className="hp-select-button"
          />
        </div>
        <div>
          <Link to="/login">
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

      {/* <div className="sp-subrent-div">{subRent}</div> */}
      <div className="sp-subrent-div">
        {data11.map((info)=>{
          return(
            <div key={info._id} className="sp-sub-div">
              <div className="sp-img-div">
                <img src={`../images/${info.image}`} />
                <div>
                  <img className="hp-locate" src={location} />
                  <p>{info.campusName.toUpperCase()}</p>
                </div>
              </div>
              <div className="sp-text-div">
                <p>{info.houseProperties[0]}</p>
                <p>#{info.price.toLocaleString()}</p>

                <Link className="sp2-linkk" to={`/rentproperty/${info._id}`}>
                  <button>View this property</button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default RentPage1;

