const { StatusCodes } = require("http-status-codes");
const { items } = require("../models/itemSchema");

const viewItems = async (req, res) => {
  const merchantID = req.user
  try {
    const allItems = await items.find({merchantID});
    if (!allItems) {
      res.status(StatusCodes.NOT_FOUND).send("Invalid id");
    } else {
      res.status(StatusCodes.OK).json({ "Items": allItems });
    }
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(`Error in fetching Items: ${error}`);
  }
};
module.exports = viewItems;
