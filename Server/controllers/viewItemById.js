const { StatusCodes } = require("http-status-codes");
const { items } = require("../models/itemSchema");

const viewItemById = async (req, res) => {
  const itemId = req.params.id;
  try {
<<<<<<< HEAD
    const item = await items.findById({ _id: itemId }).populate("merchantID", 'firstName lastName email phoneNumber altPhoneNumber profilePic');
  
=======
    const item = await items
      .findById({ _id: itemId })
      .populate(
        "merchantID",
        "firstName lastName email phoneNumber altPhoneNumber profilePic"
      );
    if (!item) {
      res.status(StatusCodes.NOT_FOUND).send("Invalid Id");
    } else {
>>>>>>> 690e68e35cca5fdb90f6f77fad0c38992e0da0b1
      res.status(StatusCodes.OK).json({ "Item": item });
    
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(`Error in finding the Item: ${error}`);
  }
};
module.exports = viewItemById;
