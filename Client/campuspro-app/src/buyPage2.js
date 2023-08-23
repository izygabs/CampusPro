import React from "react";
import "./buyPage2.css";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Contents from "./contents.json";
// import house from "./images/house3.jpg";

const BuyPage2 = () => {
  const { id } = useParams();

  const [update, setUpdate] = useState('');
  const [holddata, setHoldData] = useState([]);
  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch(`/api/item/${id}`)
      const data = await res.json()
      setHoldData(data.Item)
    } catch(err) {
      console.log(err);
    }
  }
  console.log(holddata.itemPictures)

  return (
    <div className="minor">
      {holddata && (
        <>   
          <img src={holddata.itemPictures} alt='image' className='i-mg' />
              <h1 id='details'>Item Details</h1>
              <p id='para'>Item Name: {holddata.itemName} </p>
              <p id='para'>Description: {holddata.description} </p>
              <p id='para'>Item Location: {holddata.location}</p>
              <p id='para'>Price: </p>
              <h2 id='contact'>Merchant Contact Details</h2>
              <p id='para'>Merchant Name: </p>
              <p id='para'>Merchant Number: </p>
              <p id='para'>Merchant Alternate Number: </p>
              <p id='para'>Merchant Email Address: </p>
              <p id='para'>Merchant Location: </p>
        </>
    
        // <div className="buy-div">
        //   <img src={items.image} alt='item' />
        //   <p>Item Price is: { items.price }</p>
        // </div>
      )}
      {/* <section className="minor-sec">
        <div className="first-div">
          <img src={house} alt="image" className="i-mg" />
        </div>

        <div className="second-div">
          <h1 id="details">Item Details</h1>
          <p id="para">Item Name: </p>
          <p id="para">Description: </p>
          <p id="para">Item Location: </p>
          <p id="para">Price: </p>
          <h2 id="contact">Merchant Contact Details</h2>
          <p id="para">Merchant Name: </p>
          <p id="para">Merchant Number: </p>
          <p id="para">Merchant Alternate Number: </p>
          <p id="para">Merchant Email Address: </p>
          <p id="para">Merchant Location: </p>
        </div>
      </section> */}
    </div>
  );
};

export default BuyPage2;
