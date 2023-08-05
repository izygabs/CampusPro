const jwt = require("jsonwebtoken");
require("dotenv").config();
const { user } = require("../models/userSchema");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.campusProUserToken;

  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (error, decoded) => {
      if (error || !decoded) {
        req.user = null;
        res.status(403).send("Access denied. You must login first");
      } else {
        const userID = await user.findById(decoded._id);
        req.user = userID._id;
        req.email = userID.email;
        next();
      }
    });
  } else {
    req.user = null;
    res.status(403).send("Access denied. You must login first");
  }
};
module.exports = verifyToken;
