const bcrypt = require("bcrypt");
const { user } = require("../models/userSchema");
const validator = require("../validators/joiValidation");
const { StatusCodes } = require("http-status-codes");
const errorHandler = require("../middlewares/handleError");
const fs = require("fs");

const signUp = async (req, res) => {
  const { error, value } = validator.signUp(req.body);
  let file = req.file;
  if (file == null) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ "Image Error": "Upload profile picture" });
  } else {
    if (error) {
      file && fs.unlinkSync(file.path); // delete image saved in the images folder if joi validation failed
      const errors = errorHandler.JoiErrorHandler(error);
      res.status(StatusCodes.NOT_ACCEPTABLE).json({ error: errors });
    } else {
      try {
        const userExist = await user.findOne({ email: value.Email });
        if (userExist) {
          file && fs.unlinkSync(file.path); // delete image saved in the images folder if joi validation failed
          res.status(StatusCodes.CONFLICT).json("User already exist");
        } else {
          const salt = await bcrypt.genSalt();
          const hashedPassword = await bcrypt.hash(value.Password, salt);
          const agents = new user({
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.Email.toLowerCase(),
            phoneNumber: value.Phone,
            altPhoneNumber: value.altPhoneNumber || " ",
            password: hashedPassword,
            profilePic: req.file.path,
            typeOfUser: value.typeOfUser,
            propertyIds: [],
            itemIds: [],
          });
          let newUser = await agents.save();
          res
            .status(StatusCodes.CREATED)
            .json({ "Account created successfully": newUser });
        }
      } catch (error) {
        // console.log(error);
        file && fs.unlinkSync(file.path); // delete image saved in the images folder if no new user created

        const errors = errorHandler.dbSchemaErrors(error);
        res
          .status(StatusCodes.EXPECTATION_FAILED)
          .json({ "Error message": errors });
      }
    }
  }
};
module.exports = signUp;
