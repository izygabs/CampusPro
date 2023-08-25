const { StatusCodes } = require("http-status-codes");
const hostelProps = require("../models/hostelSchema");

const getHostelStatus = async (req, res) => {
  const agentId = req.user;
  try {
    const property = await hostelProps.find({
      agentID: agentId,
      hostelStatus: "New",
    });
    res.status(200).json({ Property: property });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

module.exports = getHostelStatus;
