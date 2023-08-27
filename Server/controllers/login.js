const bcrypt = require("bcrypt");
const register = require("../models/userSchema");
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
        const token = jwt.sign(
          {
            _id: isUser._id,
            email: isUser.email,
            userType: isUser.typeOfUser,
            fName: isUser.firstName,
            lName: isUser.lastName,
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
        return res.status(403).json({ Error: "Invalid Password" });
      }
    } else {
      res.status(417).json({ Message: "Invalid Email or Password" });
    }
  } catch (error) {
    console.log(error);
    const errors = errorHandler.dbSchemaErrors(error);
    res.status(403).json({ Message: errors });
  }
};
module.exports = login;
