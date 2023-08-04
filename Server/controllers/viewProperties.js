const { StatusCodes } = require("http-status-codes");

const viewProperties = (req, res) => {
  res.status(StatusCodes.CREATED).json("Property display");
};
module.exports = viewProperties;
