import React from "react";
import "./buyPage2.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Contents from "./contents.json";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

const BuyPage2 = () => {
  const { id } = useParams();

  const [update, setUpdate] = useState("");
  const [holddata, setHoldData] = useState([]);
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(!change);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      console.log(id);
      const res = await fetch(`/api/item/${id}`);
      const data = await res.json();
      setHoldData(data.Item);
      console.log(data.Item);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(holddata.itemsPictures);

  return (
    <div className="minor">
      {holddata && (
        <>
          {/* <Navbar /> */}
          <section className="minor-sec">
            <div className="first-div">
              <img
                src={`${holddata.itemPictures}`}
                alt="image"
                className="i-mg"
              />
            </div>
            <div className="second-div">
              <h1 id="details">Item Details</h1>
              <p id="para">Item Name: {holddata.itemName} </p>
              <p id="para">Description: {holddata.description} </p>
              <p id="para">Item Location: {holddata.location}</p>
              <p id="para">Price: {holddata.price} </p>

              <button type="button" onClick={handleChange} className="bp-btn">
                {change ? "Hide Merchant Details" : "Merchant Contact Details"}
              </button>
              {change ? (
                <div className="contact">
                  <p id="para">
                    Merchant Name: {holddata.merchantID.firstName}
                  </p>
                  <p id="para">
                    Merchant Number: {holddata.merchantID.phoneNumber}
                  </p>
                  <p id="para">
                    Merchant Email Address: {holddata.merchantID.email}{" "}
                  </p>
                  <p id="para">
                    Merchant Location: {holddata.merchantID.location}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </section>
        </>
      )}
      {/* // <div className="buy-div">
        //   <img src={items.image} alt='item' />
        //   <p>Item Price is: { items.price }</p>
        // </div> */}

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
