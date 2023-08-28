import React from "react";
import logo from "./images/campuspro(6).png";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
// import SubRentpage1 from "./subRentPage1";
import { Link } from "react-router-dom";
import location from "./images/location-icon.png";
import RentPage2 from "./rentPage2"
import campData from "./campus"
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
      <Navbar />

      <div className="hp-select-div">
          <select>
            <input type="text"  placeholder="search"/>
            <option>Filter hostels by campus</option>
            {campData.map((uni)=>{
              return(
                <option value={uni.name} key={uni.name} >{uni.name}</option>
              )
            })}
          </select>

          <select>
            <option>filter hostels according to price</option>
            <option value='1000000' >1,000,000 and below</option>
            <option value='500000' >500,000 and below</option>
            <option value='200000' >200,000 and below</option>
            <option value='100000' >100,000 and below</option>
          </select>
        
        </div>

      {/* <div className="sp-subrent-div">{subRent}</div> */}
      <div className="sp-subrent-div">
        {data11.map((info)=>{
          return(
            <div key={info._id} className="sp-sub-div">
              <div className="sp-img-div">
                <img className="sp-img" src={`${info.hostelImages[0]}`} />
                <div>
                  <img className="hp-locate" src={location} />
                  <p>{info.campusName.toUpperCase()}</p>
                </div>
              </div>
              <div className="sp-text-div">
                {/* <p>{info.houseProperties[0]}</p> */}
                <p>#{Number(info.price).toLocaleString()}</p>

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

