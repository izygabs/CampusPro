const { StatusCodes } = require("http-status-codes");

const uploadProperty = (req, res) => {
  res.status(StatusCodes.CREATED).json("Property uploaded");
};
module.exports = uploadProperty;
