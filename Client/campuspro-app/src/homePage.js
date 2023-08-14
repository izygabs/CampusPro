import React from "react";
import logo from "./images/campuspro(6).png";
import "bootstrap/dist/css/bootstrap.min.css";
import house1 from "./images/house-interior.webp";
import house2 from "./images/hostel2.webp";
import hostel3 from "./images/hostel3.webp";
import data from "./data";
import { useState } from "react";
import Schools from "./schools";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
  const [datas, setDatas] = useState(data);
  // const [camp , setCamp]=useState('')

  function change(e) {
    // e.preventDefault()
    const pal = e.target.value;
    console.log(pal);

    if (pal) {
      const filt = datas.filter((place) =>
        place.campus.toLowerCase().startsWith(pal.toLowerCase())
      );
      setDatas(filt);
    } else {
      setDatas(data);
    }
  }
  const house = datas.map((aparte) => {
    return <Schools key={aparte.id} {...aparte} />;
  });
  return (
    <div className="homepage">
      <div className="hp-header">
        <div className="hp-logo-div">
          <div>
            <img src={logo} className="hp-logo" />
          </div>
          {/* <div>
            <p>CampusPro</p>
          </div> */}
        </div>
        <div>
          <input
            onChange={change}
            placeholder="Search for hostels around your school. example: oou"
            className="hp-select-button"
          />
          const campus= data.campus;
          {/*
            campus.map((item)=>{
              
            })
          
           <select onChange={change} className="hp-select-button">
              <option value={'lasu'}>LASU</option>
              <option value={'unilag'}>UNILAG</option>
              <option value={'laspotech'}>LASPOTECH</option>
              <option value={'ui'}>UI(Ibadan)</option>
              <option value={'the polytechnic ibadan'}>THE POLYTECHNIC IBADAN</option>
              <option value={'oou'}>OOU</option>
              <option value={'oau'}>OAU</option>
              <option value={'jabu'}>JABU</option>
              <option value={'mapoly'}>MAPOLY</option>
              <option value={'osu'}>OSU</option>
              <option value={'eksu'}>EKSU</option>
          </select> */}
        </div>
        <div>
          <Link to="/login-page">
            <button className="hp-login-button">Login</button>
          </Link>
        </div>
      </div>

      {/* //carousel */}
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
            <Link className="link" to="/login-page">
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
      <div className="hp-school">{house}</div>
    </div>
  );
}

export default HomePage;
