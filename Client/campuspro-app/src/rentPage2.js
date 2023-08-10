
import logo from './images/campuspro(6).png';
import house from './images/house1.jpg'
import {useState} from "react"

function RentPage2() {
  const [info, setInfo] = useState("");

  const changeInfo = () => setInfo();

  return (
    <div>
      <div className="hp-header">
        <div className="hp-logo-div">
          <div>
            <img src={logo} className="hp-logo" />
          </div>
          <div>
            <p>CampusPro</p>
          </div>
        </div>
        {/* <div>
          <input  onChange={sort} placeholder="Search for hostels around your school. example: oou" className="hp-select-button"/>

        </div> */}
        <div>
          <button className="hp-login-button">Login</button>
        </div>
      </div>

      <section className="sp2-main-sector">
        <div className="sp2-divs">
          <img className="sp2-main-img" src={house} />
        </div>
        <div className="sp2-divs2">
          <p>Description:</p>
          <p>Campus:</p>
          <p>Amount/Annum :</p>
          <p>Electricity:</p>
          <p>Furnised:</p>
          <p>Cer Park:</p>
          <p>Agent Name:</p>
          <p>Agent address:</p>
        </div>
      </section>

      <div>
        <button>click to Contact this agent</button>
      </div>
    </div>
  );
}

export default RentPage2;
