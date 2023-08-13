import React from "react";
// import axios from "axios";
// import { useGoogleLogin } from "@react-oauth/google";

import { GoogleLogin } from "@react-oauth/google";

const google = async () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default google;
