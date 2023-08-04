const bcrypt = require("bcrypt");
const register = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const login = (req, res) => {
  res.status(StatusCodes.ACCEPTED).json("Welcome");
};
module.exports = login;
