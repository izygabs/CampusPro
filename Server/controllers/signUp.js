const bcrypt = require("bcrypt");
const { user } = require("../models/userSchema");
const validator = require("../validators/joiValidation");
const { StatusCodes } = require("http-status-codes");

const signUp = async (req, res) => {
  const { error, value } = validator.signUp(req.body);
  console.log(value);
  if (error) {
    res.status(StatusCodes.NOT_ACCEPTABLE).json({ error: error });
  } else {
    try {
      const userExist = await user.findOne({ email: value.Email });
      if (userExist) {
        res.status(StatusCodes.CONFLICT).send("User Exist");
      } else {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(value.Password, salt);
        const agents = new user({
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.Email,
          phoneNumber: value.Phone,
          altPhoneNumber: value.altPhoneNumber,
          password: hashedPassword,
          // profilePic: req.file.path,
        });
        let newUser = await agents.save();
        res
          .status(StatusCodes.CREATED)
          .json({ "Account created successfully": newUser });
      }
    } catch (error) {
      console.log(error);
      res.status(StatusCodes.EXPECTATION_FAILED).send("Registration failed");
    }
  }
};
module.exports = signUp;
