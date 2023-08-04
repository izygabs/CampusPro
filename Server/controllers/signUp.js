const bcrypt = require("bcrypt");
const register = require("../models/userSchema");
const validator = require("../validators/joiValidation");
const { StatusCodes } = require("http-status-codes");

const signUp = (req, res) => {
  res.status(StatusCodes.CREATED).json("Account created successfully");
};
module.exports = signUp;
