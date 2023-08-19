import React from "react";

function Welcome() {
  return (
    <div>
      <h1>Welcome back, {"Isaiah"}</h1>
      <div className="db-content">
        <h6>WHAT'S NEXT</h6>
        <h3>Let's continue with creating your property and items!</h3>
        <p>
          Your info is pending verified, just continue with listing your
          property now.
        </p>
        <button>Go to Create Your Property</button>
      </div>
      <div className="db-confirm">
        <p>Pending Confirmation</p>
      </div>
    </div>
  );
}

export default Welcome;
