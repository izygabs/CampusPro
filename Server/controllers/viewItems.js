const { StatusCodes } = require("http-status-codes");

const viewItems = (req, res) => {
  res.status(StatusCodes.CREATED).json("Items display");
};
module.exports = viewItems;
