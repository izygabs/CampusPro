const bcrypt = require("bcrypt");
const { user } = require("../models/userSchema");
const validator = require("../validators/joiValidation");
const { StatusCodes } = require("http-status-codes");
const errorHandler = require("../middlewares/handleError");
const fs = require("fs");
const nodeMailer = require("../Services/nodemailer");

const signUp = async (req, res) => {
<<<<<<< HEAD
  // console.log(req.body.data);
  const value = req.body.data;
  console.log(value);
=======
  const value = req.body;
>>>>>>> 48bdbfec88992606cf06d267b0333ae7e1fecbe1

  try {
    const userExist = await user.findOne({ email: value.Email });
    if (userExist) {
      // res.send("user already");
      res.status(401).json({ Message: "Email already exist" });
    } else {
      const subject = `Welcome to CampusPro`;
      const message = `Greeting ${value.firstName}.
                    Your account has been successfully created on our platform.
                    Please login using your credentials and start posting your properties and items.
                    
                    Best regards
                    The team at CampusPro`;
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(value.Password, salt);
      const agents = new user({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.Email.toLowerCase(),
        phoneNumber: value.Phone,
        altPhoneNumber: value.altPhoneNumber || null,
        password: hashedPassword,
        profilePic: null,
        typeOfUser: value.userType,
        propertyIds: [],
        itemIds: [],
      });
      let newUser = await agents.save();
      nodeMailer(value.Email, subject, message);
      // alert("Account created successfully");
      res.status(201).json({ Message: "Account created successfully" });
      // res.redirect("/");
    }
  } catch (error) {
    console.log(error);
    // delete image saved in the images folder if no new user created

    const errors = errorHandler.dbSchemaErrors(error);
    // res
    //   .status(StatusCodes.EXPECTATION_FAILED)
    //   .json({ "Error message": errors });
    return res.status(403).json({ Message: errors });
  }
  // }
};
module.exports = signUp;
