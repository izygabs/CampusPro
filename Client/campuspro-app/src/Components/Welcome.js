import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import AddItems from "./AddItems";

function Welcome(prop) {
  return (
    <div>
      <div>
        <h1>Welcome back, {prop.firstName}</h1>
        <div className="db-content">
          <h6>WHAT'S NEXT</h6>
          <h3>Let's continue with creating your properties and items!</h3>
          <p>
            Your info is pending verified, just continue with listing your
            property now.
          </p>
          <button onClick={prop.handleChange}>
            Go to Create Your Property
          </button>
        </div>
        <div className="db-confirm">
          <p>Pending Confirmation</p>
          <h3>The property is pending</h3>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
