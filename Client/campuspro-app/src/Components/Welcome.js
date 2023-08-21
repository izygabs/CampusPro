import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import AddItems from "./AddItems";

function Welcome() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [firstName, setFirstName] = useState();
  const [isTokenExp, setIsTokenExp] = useState(false);

  const navigate = useNavigate();

  const handleButtonClicked = (component) => {
    setSelectedComponent(component);
    setShowOverlay(true);
  };

  return (
    <div>
      <div>
        <h1>Welcome back, {firstName}</h1>
        <div className="db-content">
          <h6>WHAT'S NEXT</h6>
          <h3>Let's continue with creating your property and items!</h3>
          <p>
            Your info is pending verified, just continue with listing your
            property now.
          </p>
          <button
            onClick={() =>
              handleButtonClicked(
                isTokenExp ? navigate("/login") : <AddItems />
              )
            }
          >
            Go to Create Your Property
          </button>
        </div>
        <div className="db-confirm">
          <p>Pending Confirmation</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
