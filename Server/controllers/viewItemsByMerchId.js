const { StatusCodes } = require("http-status-codes");
const { items } = require("../models/itemSchema");

const viewItemsByMerchId = async (req, res) => {
  const merchantId = req.params.merchantID;
  try {
    const allItems = await items.find({ merchantID: merchantId });

    res.status(StatusCodes.OK).json({ "Items found": allItems });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(`Error in fetching Items: ${error}`);
  }
};
module.exports = viewItemsByMerchId;
