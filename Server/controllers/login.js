const bcrypt = require("bcrypt");
// const register = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { user } = require("../models/userSchema");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");

const login = async (req, res) => {
  const { Email, Password } = req.body;
  // console.log(Email, Password);

  try {
    const isUser = await user.findOne({ email: Email });
    if (isUser) {
      //check the password
      let validPassword = await bcrypt.compare(Password, isUser.password);
      if (validPassword) {
        let username = isUser.firstName + " " + isUser.lastName;

        const token = jwt.sign(
          {
            _id: isUser._id,
            email: isUser.email,
            userType: isUser.typeOfUser,
            name: username,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.cookie("campusProUserToken", token, { maxAge: 1000 * 60 * 60 });
        res
          .status(200)
          .json({ Message: `Welcome ${isUser.firstName}`, jwtToken: token });
      } else {
        return res.status(401).json({ Message: "Invalid Password" });
      }
    } else {
      res.status(417).json({ Message: "Invalid Email or Password" });
    }
  } catch (error) {
    const errors = errorHandler.dbSchemaErrors(error);
    res.status(403).json({ Message: errors });
  }
};
module.exports = login;
