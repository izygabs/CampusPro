const { StatusCodes } = require("http-status-codes");
const { items } = require("../models/itemSchema");

const viewItemById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await items.findById({ _id: itemId }).populate("merchantID", 'firstName lastName email phoneNumber altPhoneNumber profilePic');
  
      res.status(StatusCodes.OK).json({ "Item": item });
    
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(`Error in finding the Item: ${error}`);
  }
};
module.exports = viewItemById;
