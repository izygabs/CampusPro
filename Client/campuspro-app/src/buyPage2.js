import React from "react";
import "./buyPage2.css";
import Contents from "./contents.json";
import house from "./images/house3.jpg";

const BuyPage2 = ({ image, description }) => {

  // const keys = ['image']

<<<<<<<<< Temporary merge branch 1
const BuyPage2 = () => {
  return (
    <div className="bp2-body">
      <section className="bp2-sec">
        <div className="bp2-sec-div">{/* <img src={} alt='house' /> */}</div>
        <div className="bp2-desc">
          <h1>Property Details</h1>
          <p>Hello</p>
          <p></p>
        </div>
      </section>
    </div>
  );
};

export default BuyPage2;
=========
  return (
    <div className="minor">
      <section className="minor-sec">
        <div className="first-div">
          <img src={house} alt='image' className='i-mg' />
        </div>

        <div className="second-div">
          <h1 id='details'>Item Details</h1>
          <p id='para'>Item Name: </p>
          <p id='para'>Description: </p>
          <p id='para'>Item Location: </p>
          <p id='para'>Price: </p>
          <h2 id='contact'>Merchant Contact Details</h2>
          <p id='para'>Merchant Name: </p>
          <p id='para'>Merchant Number: </p>
          <p id='para'>Merchant Alternate Number: </p>
          <p id='para'>Merchant Email Address: </p>
          <p id='para'>Merchant Location: </p>
        </div>
      </section>
    </div>
  )
}

export default BuyPage2;
>>>>>>>>> Temporary merge branch 2
