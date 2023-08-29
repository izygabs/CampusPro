const { StatusCodes } = require("http-status-codes");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");
const { hostelProps } = require("../models/hostelSchema");
let fs = require("fs");
let hostelProperties = require("../data");
const nodeMailer = require("../Services/nodemailer");
const { user } = require("../models/userSchema");

const uploadProperty = async (req, res) => {
  const arrayStatus = ["Pending", "Approved", "Rejected"];

  let hostelsPictures = req.files;
  // console.log(hostelsPictures);
  let userEmail = req.email;
  let userId = req.user;
  let value = req.body;
  // console.log("values", req.body);
  // if (hostelsPictures == null || hostelsPictures.length < 5) {
  //   // to delete the images saved into the hostels Images folder while validation failed
  //   hostelsPictures.forEach((file) => {
  //     fs.unlinkSync(file.path);
  //   });

  //   res.status(400).json({ Message: "You must upload minimum of 5 pictures" });
  // } else {
  const userDetails = await user.findById({ _id: userId });
  const {
    description,
    price,
    campusName,
    location,
    negotiable,
    hostelFeatures,
  } = value;
  const subject = `Property added successfully`;
  const message = `Greeting ${userDetails.firstName},
    You have successfully uploaded new property. It will be published once verified.
    Please check your dashboard for more details.                   
                    

                    Best regards
                    The team at CampusPro`;

  try {
    const hostelPics = hostelsPictures.map((file) => file.path);
    let num = Math.floor(Math.random() * 3);

    const hostel = new hostelProps({
      agentID: userId,
      description: description,
      price: price,
      campusName: campusName,
      location: location,
      hostelImages: [], //to be updated later with the image path
      hostelFeatures: hostelFeatures,
      hostelStatus: arrayStatus[num],
    });

    let newHostel = await hostel.save();
    if (newHostel) {
      await hostelProps.findByIdAndUpdate(
        { _id: newHostel._id },
        { $push: { hostelImages: { $each: hostelPics } } },
        { $push: { hostelFeatures: { $each: hostelFeatures } } },
        { new: true }
      );
    }
    nodeMailer(userEmail, subject, message);
    res.status(201).json({ Message: "Properties uploaded succesfully" });
  } catch (error) {
    const errors = errorHandler.PropertySchemaErrors(error);
    console.log(errors);
    res.status(417).json({ Error: errors });
  }
};
module.exports = uploadProperty;
