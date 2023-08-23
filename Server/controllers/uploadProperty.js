const { StatusCodes } = require("http-status-codes");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");
const { hostelProps } = require("../models/hostelSchema");
let fs = require("fs");
let hostelProperties = require("../data");
const nodeMailer = require("../Services/nodemailer");
const { user } = require("../models/userSchema");

const uploadProperty = async (req, res) => {
  let hostelsPictures = req.files;
  // console.log(hostelsPictures);
  let userEmail = req.email;
  let userId = req.user;
  let value = req.body;
  if (hostelsPictures == null || hostelsPictures.length < 5) {
    // to delete the images saved into the hostels Images folder while validation failed
    hostelsPictures.forEach((file) => {
      fs.unlinkSync(file.path);
    });

    res.status(400).json({ Message: "You must upload minimum of 5 pictures" });
  } else {
    const userDetails = await user.findById({ _id: userId });
    const { Description, Price, Campus, Location } = value;
    const subject = `Property added successfully`;
    const message = `Greeting ${userDetails.firstName},
    You have successfully uploaded new property. It will be published once verified.
    Please check your dashboard for more details.                   
                    

                    Best regards
                    The team at CampusPro`;

    try {
      const hostelPics = hostelsPictures.map((file) => file.path);

      const hostel = new hostelProps({
        agentID: userId,
        description: Description,
        price: Price,
        campusName: Campus,
        location: Location,
        hostelImages: [], //to be updated later with the image path
        houseProperties: [],
        hostelStatus: "New",
      });

      let newHostel = await hostel.save();
      if (newHostel) {
        await hostelProps.findByIdAndUpdate(
          { _id: newHostel._id },
          { $push: { hostelImages: { $each: hostelPics } } },
          { $push: { houseProperties: { $each: hostelProperties } } },
          { new: true }
        );
      }
      nodeMailer(userEmail, subject, message);
      res.status(StatusCodes.CREATED).json("Properties uploaded succesfully");
    } catch (error) {
      // to delete the images saved into the hostels Images folder while database failed
      hostelsPictures.forEach((file) => {
        fs.unlinkSync(file.path);
      });

      const errors = errorHandler.PropertySchemaErrors(error);
      res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ "Database Error": errors });
    }
  }
};
module.exports = uploadProperty;
