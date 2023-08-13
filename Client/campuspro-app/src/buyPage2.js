import React from 'react';
import "./buyPage2.css";
import Contents from "./contents.json";
import house from './images/house3.jpg';

const BuyPage2 = ({ image, description }) => {

  // const keys = ['image']

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