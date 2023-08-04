const { StatusCodes } = require("http-status-codes");

const updateProperty = (req, res) => {
  res.status(StatusCodes.CREATED).json("Property updated");
};
module.exports = updateProperty;
