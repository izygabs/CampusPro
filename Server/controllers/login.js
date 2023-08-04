const bcrypt = require("bcrypt");
const register = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { user } = require("../models/userSchema");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");

const login = async (req, res) => {
  const { error, value } = validator.loginSchema(req.body);
  const { Email, Password } = value;
  if (error) {
    const errors = errorHandler.JoiErrorHandler(error);
    res.status(StatusCodes.FORBIDDEN).json({ "Validation Error": errors });
  } else {
    try {
      const isUser = await user.findOne({ email: Email });
      if (isUser) {
        //check the password
        let validPassword = await bcrypt.compare(Password, isUser.password);
        if (validPassword) {
          const token = jwt.sign(
            { _id: isUser._id, email: isUser.email },
            process.env.SECRET_KEY,
            {
              expiresIn: "1h",
            }
          );
          res.cookie("campusProUserToken", token, { maxAge: 1000 * 60 * 60 });
          res.status(StatusCodes.OK).json({ "Welcome ": isUser.firstName });
        } else {
          return res.status(401).json("Invalid Password");
        }
      } else {
        res
          .status(StatusCodes.EXPECTATION_FAILED)
          .json("Invalid Email or Password");
      }
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.FORBIDDEN).json({ "Database Error": error });
    }
  }
};
module.exports = login;
