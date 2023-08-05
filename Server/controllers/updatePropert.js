const { StatusCodes } = require("http-status-codes");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");
const { hostelProps } = require("../models/hostelSchema");
let fs = require("fs");

const updateProperty = async (req, res) => {
  let hostelsPictures = req.files;
  let userEmail = req.email;
  let userId = req.user;
  const { error, value } = validator.hostelSchema(req.body);

  if (hostelsPictures == null) {
    // to delete the images saved into the hostels Images folder while validation failed
    hostelsPictures.forEach((file) => {
      fs.unlinkSync(file.path);
    });

    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ "Image Error": "Upload hostel pictures" });
  } else {
    const { Description, Price, Campus, Location } = value;
    if (error) {
      // to delete the images saved into the hostels Images folder while validation failed
      hostelsPictures.forEach((file) => {
        fs.unlinkSync(file.path);
      });

      const errors = errorHandler.JoiErrorHandler(error);
      res
        .status(StatusCodes.FORBIDDEN)
        .json({ "Input validation failed": errors });
    } else {
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
        });

        let newHostel = await hostel.save();
        if (newHostel) {
          await hostelProps.findByIdAndUpdate(
            { _id: newHostel._id },
            { $push: { hostelImages: { $each: hostelPics } } },
            { new: true }
          );
        }
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
  }
};
module.exports = updateProperty;
