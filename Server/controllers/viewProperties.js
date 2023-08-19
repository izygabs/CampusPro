const { StatusCodes } = require("http-status-codes");
const { hostelProps } = require("../models/hostelSchema");

const viewProperties = async (req, res) => {
  const agentID = req.user;
  try {
    const allProperties = await hostelProps.find({});
    if (!allProperties) {
      res.status(StatusCodes.BAD_REQUEST).send("Invalid ID");
    } else {
      res.status(StatusCodes.OK).json({ "Properties": allProperties });
    }
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(`Error in getting Properties: ${error}`);
  }
};
module.exports = viewProperties;
