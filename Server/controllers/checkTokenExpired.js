const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkTokenExpired = (req, res) => {
  const token = req.cookies.campusProUserToken;

  if (!token) {
    // Token is not present
    return true;
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const expirationTime = new Date(decodedToken.exp * 1000); // Convert to milliseconds

    // Compare the expiration time with the current time
    const isTokenExpired = expirationTime <= new Date();

    res.status(201).json({ Exp: isTokenExpired, campusToken: token });
    return "false";
  } catch (error) {
    // Token is invalid or expired
    console.log(error);
    return true;
  }
};
module.exports = checkTokenExpired;
