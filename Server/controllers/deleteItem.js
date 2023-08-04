const { StatusCodes } = require("http-status-codes");

const deleteItem = (req, res) => {
  res.status(StatusCodes.CREATED).json("item deleted");
};
module.exports = deleteItem;
