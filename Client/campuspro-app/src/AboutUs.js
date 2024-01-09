import React from 'react';
import './AboutUs.css';
import House from './images/quality-house.jpg';
import interior from './images/quality-interior.jpg';
import team from './team.json';
import Navbar from '../src/Components/Navbar';

const About = () => {

  return (
    <>
    <Navbar />
    <div className='main-about'>
      <section className="about-main-section">
        <div className="about-build-div">
          <div className="about-build">
            <p>We build bridges between <span>agents, merchants and the students.</span></p>
          </div>
          <div className="about-moto">
            <p>CampusPro is a Nigerian based platform that was created with the goal of making it easier for university students to get better accommodation in any campus. 
              CampusPro website tightens up the gap between the Students and the Agents in terms of accommodation to rent. 
            </p>
          </div>
        </div>
        {/* Image div */}
        <div className="about-img-div">
          <div className="about-house">
            <img src={House} alt='house' />
          </div>
          <div className="about-interior">
            <img src={interior} alt='interior' />
          </div>
        </div> <hr className='about-hr'/>
        {/* our team */}
        <div className="about-ourteam">
          <div className="about-team">
            <p>Together <br/>we are<br/> <strong>strong</strong></p>
          </div>
          <div className="about-team-vision">
            <p>We always work in unity to make sure that<br/> we achieve our goal which is to create and<br/> maintain 
              an enabling platform for users to engage.
            </p>
          </div>
        </div>
        {/* our vision */}
        <div className="about-ourvision">
          <div className="about-vision-div">
            <p>CampusPro Vision</p>
          </div>
          <div className="about-vision-text">
            <p>CampusPro vision is to be the leading provider of student housing solutions,
                 providing a safe and secure living environment for students across the country.
                 We strive to create an environment that is conducive for learning and growth while 
                  also providing a comfortable and enjoying living experience. Our goal is to help 
                  students with the best possible housing options while also helping them save money
                  on their rent.</p>
          </div>
        </div>
        {/* our amazing team */}
          <h1 className='about-h1'>Meet our <br/>Amazing team</h1>
        <div className="about-amazing-team">
          {team.map((devs) => (
            <div className="about-devs" key={devs.id}>
                 <img src={devs.image} alt='agba coder' className='about-i' />
              <div className="about-us">
                <p>{devs.name}</p>
                <p>Role: {devs.role}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
    </>
  )
}

export default About;