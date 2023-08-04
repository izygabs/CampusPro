const { StatusCodes } = require("http-status-codes");

const updateItem = (req, res) => {
  res.status(StatusCodes.CREATED).json("Item updated");
};
module.exports = updateItem;
