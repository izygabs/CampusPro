import React from 'react';
import './AboutUs.css';
// import Navbar from './Navbar';
import House from './images/house.jpeg';
import vision from './images/vision.jpeg';
// import house from './images/house-1.png';

const About = () => {

  return (
    <div className='main-about'>

      {/* <section className="bg">
        <h1>CampusPro</h1>
      </section> */}
      
      <section className="about-sec">
        <div className="first-about">
          <img src={House} alt='house' className='images' />
        </div>
      <div className="second-about">
        <h1 className="ab-head">
          About CampusPro 
        </h1>
        <p id='par'>CampusPro is a Nigerian based platform that was created with the goal of making it easier for university students to get better accomdation in any campus they are during their days in school. CampusPro website tightens up the gap between the student and the agent in terms of accomodation to rent. 
          In campusPro, students who wish to sell some of their items they used in school also have the opportunuty to signup on the website as a merchant and upload images, descriptions and prices of the items they wish to upload. We are focused on giving the students a 
          proper accomodation suitable for their learning through the legit and qualified agents that signup on our website.
        </p>
      </div>
      </section>

      <section className="about-sec" id='ab-sec'>
      <div className="second-about" id='second-div'>
        <h1 className="ab-head">
          Our Vision 
        </h1>
        <p id='par'>CampusPro is a Nigerian based platform that was created with the goal of making it easier for university students to get better accomdation in any campus they are during their days in school. CampusPro website tightens up the gap between the student and the agent in terms of accomodation to rent. 
          In campusPro, students who wish to sell some of their items they used in school also have the opportunuty to signup on the website as a merchant and upload images, descriptions and prices of the items they wish to upload. We are focused on giving the students a 
          proper accomodation suitable for their learning through the legit and qualified agents that signup on our website.
        </p>
      </div>
        <div className="first-about">
          <img src={vision} alt='house' className='images' />
        </div>
      </section>
      {/* <Navbar /> */}
    </div>
  )
}

export default About;