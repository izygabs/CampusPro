const jwt = require("jsonwebtoken");
require("dotenv").config();
const { user } = require("../models/userSchema");
// const blacklist = new Set();

const verifyToken = async (req, res, next) => {
  const token = req.cookies.campusProUserToken;

  // if (blacklist.has(token)) {
  //   return res.status(401).json({ message: "Token is blacklisted" });
  // }
  // // next();

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
      if (error || !decoded) {
        req.user = null;
        res
          .status(401)
          .json({ Message: "Access denied. You must login first" });
      } else {
        // const expirationTime = new Date(decoded.exp * 1000);
        // const isExpired = expirationTime <= new Date();
        const userID = await user.findById(decoded._id);
        req.user = userID._id;
        req.email = userID.email;
        next();
        // return isExpired;
      }
    });
  } else {
    req.user = null;
    res.status(401).json({ Message: "Access denied. You must login first" });
  }
};
module.exports = verifyToken;
