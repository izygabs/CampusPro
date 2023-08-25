const { StatusCodes } = require("http-status-codes");
const items = require("../models/itemSchema");

const getItemStatus = async (req, res) => {
  const merchantId = req.user;
  try {
    const item = await items.find({
      merchantID: merchantId,
      itemStatus: "New",
    });
    res.status(200).json({ Item: item });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

module.exports = getItemStatus;
