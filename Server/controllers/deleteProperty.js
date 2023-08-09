const { StatusCodes } = require("http-status-codes");
const { hostelProps } = require("../models/hostelSchema");
const fs = require("fs");

const deleteProperty = async (req, res) => {
  const propertyId = req.params.id;
  try {
    const property = await hostelProps.findById({ _id: propertyId });
    const propPic = property.hostelImages;
    const delProperty = await hostelProps.findByIdAndDelete({
      _id: propertyId,
    });
    if (!delProperty) {
      res.status(StatusCodes.NOT_FOUND).send("Invalid Id");
    } else {
      propPic.forEach((file) => {
        fs.unlinkSync(file.path);
      });
      res.status(StatusCodes.OK).json(`Property deleted: ${delProperty}`);
    }
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(`Error in deleting property: ${error}`);
  }
};
module.exports = deleteProperty;
