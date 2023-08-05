const { StatusCodes } = require("http-status-codes");

const deleteProperty = (req, res) => {
  res.status(StatusCodes.CREATED).json("Property deleted");
};
module.exports = deleteProperty;
