const bcrypt = require("bcrypt");
const user = require("../models/userSchema");
const validator = require("../validators/joiValidation");
const { StatusCodes } = require("http-status-codes");

const signUp = async (req, res) => {
  const { error, value } = validator(req.body);
  if (error) {
    res.status(StatusCodes.NOT_ACCEPTABLE).send(error);
  }
  res.status(StatusCodes.CREATED).json("Account created successfully");
};
module.exports = signUp;
