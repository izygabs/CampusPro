const { StatusCodes } = require("http-status-codes");
const { hostelProps } = require("../models/hostelSchema");

const viewPropertyById = async (req, res) => {
  const propertyId = req.params.id;
  try {
    const property = await hostelProps
      .findById({ _id: propertyId })
      .populate(
        "agentID",
        "firstName lastName email phoneNumber altPhoneNumber profilePic"
      );
    if (!property) {
      res.status(StatusCodes.BAD_REQUEST).send("Invalid Id");
    } else {
      res.status(200).json({ Property: property });
    }
  } catch (error) {
    res
      .status(StatusCodes.EXPECTATION_FAILED)
      .json(`Error in fetching the Property ${error}`);
  }
};
module.exports = viewPropertyById;
