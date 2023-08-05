const { StatusCodes } = require("http-status-codes");

const viewPropertyById = (req, res) => {
  res.status(StatusCodes.CREATED).json("Property display");
};
module.exports = viewPropertyById;
