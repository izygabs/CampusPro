const { StatusCodes } = require("http-status-codes");
const hostelProps = require("../models/hostelSchema");

const getHostelStatus = async (req, res) => {
  const status = req.params.status;
  try {
    const property = await hostelProps.find({
      agentID: req.user,
      hostelStatus: status,
    });
    res.status(200).json({ Property: property });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

module.exports = getHostelStatus;
