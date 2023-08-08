const { StatusCodes } = require("http-status-codes");

const viewItemById = (req, res) => {
  res.status(StatusCodes.CREATED).json("Item display");
};
module.exports = viewItemById;
