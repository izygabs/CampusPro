import React from "react";
import logo from "./images/campuspro(6).png";
import "bootstrap/dist/css/bootstrap.min.css";
import location from "./images/location-icon.png";
import house1 from "./images/house-interior.webp";
import house2 from "./images/hostel2.webp";
import hostel3 from "./images/hostel3.webp";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import Navbar from "./Components/Navbar";
import jwtDecode from "jwt-decode";
import axios from "axios";
// import Navbar from "./Components/Navbar";

function HomePage() {
  const [datas, setDatas] = useState([]);
  const [log, setLog] = useState("Log out");
  const [isTokenExp, setIsTokenExp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/getTokenExpiration", {
      headers: {
        Authorization: "campusProUserToken", // Include your actual token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const token = jwtDecode(data.campusToken);
        // console.log(token);
        if (!token) {
          navigate("/login");
        }
        const expirationTime = token.exp;
        const currentTime = Math.floor(Date.now() / 1000);

        if (expirationTime < currentTime) {
          // Token has expired, redirect to login
          navigate("/login");
        } else setIsTokenExp(true);
        // console.log(data.token);
        // console.log(isTokenExp);
        // Redirect to login if token is expired
      })
      .catch((error) => {
        console.error("Error fetching token status:", error);
      });
  }, [isTokenExp]);

  //using the hook to display the fetch data on load
  useEffect(() => {
    fetcher();
  }, []);

  //function to fetch properties from the database
  const fetcher = async () => {
    try {
      const url = "/api/allProperties";
      const info = await fetch(url);
      const data2 = await info.json();
      // console.log(data2)
      const result = data2.Properties;
      setDatas(result);
      // console.log(result[0]);
      // console.log(result[0].hostelImages[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    const logout = await axios.get("/api/logout");
    if (logout) {
      alert("successful log out");
      setLog("Login");
      navigate("/");
    }
  };

  //function to filter properties according to the user search
  // function change(e) {
  //   // e.preventDefault()
  //   const pal = e.target.value;
  //   console.log(pal);

  //   if (pal) {
  //     const filt = datas.filter((place) =>
  //       place.campus.toLowerCase().startsWith(pal.toLowerCase())
  //     );
  //     setDatas(filt);
  //   } else {
  //     // setDatas(data);
  //   }
  //   // setDatas(datas);
  // }

  // console.log(datas)

  return (
    <div className="homepage">
      <Navbar />

     
      <div className="hp-carousel-div">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={house1} class="d-block w-100" alt="..." />

            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img src={house2} class="d-block w-100" alt="..." />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img src={hostel3} class="d-block w-100" alt="..." />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section className="hp-section1">
          <div className="hp-buy-div">
            <p className="hp-heading">
              BUY <br></br> ITEMS
            </p>
            <p className="hp-texts">
              Explore various properties listed for sale around your campus
            </p>
            <Link className="link" to="/buyPage1">
              <button className="hp-button-link">Buy items</button>
            </Link>
          </div>

          <div className="hp-sell-div">
            <p className="hp-heading">
              SELL <br></br>ITEMS
            </p>
            <p className="hp-texts">
              Become a merchant and sell properties on CampusPro.
            </p>

            <Link to={isTokenExp ? "/Dashboard" : "/login"}>
              <button className="hp-button-link">Become a merchant</button>
            </Link>
          </div>

          <div className="hp-rent-div">
            <p className="hp-heading">RENT APARTMENT </p>
            <p className="hp-texts">
              Navigate through pletora of hostels around your campus
            </p>
            <Link className="link" to="/01-rentPage">
              <button className="hp-button-link">Rent an apartment</button>
            </Link>
          </div>
        </section>
      </div>
      <div className="hp-view-div">
        <p className="hp-view-hostels">View hostels around your campus</p>
      </div>
      <div className="hp-school">
        {datas.map((results) => {
          return (
            <div key={results._id} className="hp-school-div">
              <div className="hp-img-div">
                <img className="hp-img" src={`/${results.hostelImages[0]}`} />
                <div>
                  <img className="hp-locate" src={location} />
                  <p>{results.campusName}</p>
                </div>
              </div>
              <div className="hp-props-text">
                {/* <p>{results.houseProperties[0]}</p> */}
                <p>#{Number(results.price).toLocaleString()} </p>

                <Link className="sp2-linkk" to={`/rentproperty/${results._id}`}>
                  <button className="home-school-button">
                    View this property
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
