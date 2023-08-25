const { StatusCodes } = require("http-status-codes");
const { items } = require("../models/itemSchema");

const viewItemById = async (req, res) => {
  const itemId = req.params.id;
  try {
<<<<<<< HEAD
    const item = await items
      .findById({ _id: itemId })
      .populate(
        "merchantID",
        "firstName lastName email phoneNumber altPhoneNumber profilePic"
      );
    if (!item) {
      res.status(StatusCodes.NOT_FOUND).send("Invalid Id");
    } else {
=======
    const item = await items.findById({ _id: itemId }).populate("merchantID", 'firstName lastName email phoneNumber altPhoneNumber profilePic');
  
>>>>>>> b320c2d0000e43c142bb34d6c0d1387baef7db4d
      res.status(StatusCodes.OK).json({ "Item": item });
    
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(`Error in finding the Item: ${error}`);
  }
};
module.exports = viewItemById;
