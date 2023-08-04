const bcrypt = require("bcrypt");
const register = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { user } = require("../models/userSchema");
const validator = require("../validators/joiValidation");

const login = async (req, res) => {
  const { error, value } = validator.loginSchema(req.body);
  const { email, password } = value;
  if (error) {
    res.status(StatusCodes.FORBIDDEN).json({ "Validation Error": error });
  } else {
    try {
      const isUser = await user.findOne({ email });
      if (isUser) {
        //check the password
        let validPassword = await bcrypt.compare(password, isUser.password);
        if (validPassword) {
          const token = jwt.sign(
            { _id: isUser._id, email: isUser.email },
            process.env.SECRET_KEY,
            {
              expiresIn: "1h",
            }
          );
          res.cookie("campusProUserToken", token, { maxAge: 1000 * 60 * 60 });
        } else {
          return res.status(401).send("Invalid Password");
        }
      } else {
      }
    } catch (error) {
      res.status(StatusCodes.FORBIDDEN).json({ "Database Error": error });
    }

    res.status(StatusCodes.ACCEPTED).json("Welcome");
  }
};
module.exports = login;
