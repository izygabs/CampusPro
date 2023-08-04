const { StatusCodes } = require("http-status-codes");

const uploadItem = (req, res) => {
  res.status(StatusCodes.CREATED).json("Item uploaded");
};
module.exports = uploadItem;
