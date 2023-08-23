const { StatusCodes } = require("http-status-codes");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");
const { hostelProps } = require("../models/hostelSchema");
let fs = require("fs");
let data = require("../data");

const updateProperty = async (req, res) => {
  let hostelsPictures = req.files;
  let userEmail = req.email;
  let userId = req.user;
  let propertyId = req.params.id;

  // const { error, value } = validator.hostelSchema(req.body);

  const { Description, Price, Campus, Location } = req.body;
  // if (error) {
  //   // to delete the images saved into the hostels Images folder while validation failed
  //   hostelsPictures.forEach((file) => {
  //     fs.unlinkSync(file.path);
  //   });
  //   const errors = errorHandler.JoiErrorHandler(error);
  //   res
  //     .status(StatusCodes.FORBIDDEN)
  //     .json({ "Input validation failed": errors });
  // } else {
  try {
    let existProperty = await hostelProps.findById({ _id: propertyId });
    const hostelPics = hostelsPictures.map((file) => file.path);

    let filterData = hostelPics.filter((file) => {
      return !existProperty.hostelImages.includes(file);
    });

    const hostel = await hostelProps.findByIdAndUpdate(
      {
        _id: propertyId,
      },
      {
        description: Description,
        price: Price,
        campusName: Campus,
        location: Location,
        $push: { hostelImages: { $each: filterData } }, //to be updated later with the image path
        $addToSet: { houseProperties: { $each: data } },
      },
      { new: true }
    );
    res.status(201).json({ message: "Property updated successfully" });
  } catch (error) {
    // to delete the images saved into the hostels Images folder while database failed
    hostelsPictures.forEach((file) => {
      fs.unlinkSync(file.path);
    });
    console.log(error);
    const errors = errorHandler.PropertySchemaErrors(error);
    res.status(422).json({ error: "Database Error" });
  }
  // }
};
module.exports = updateProperty;
