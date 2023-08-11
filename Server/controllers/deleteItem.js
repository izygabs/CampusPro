const { StatusCodes } = require("http-status-codes");
const { items } = require("../models/itemSchema");
const fs = require("fs");

const deleteItem = async (req, res) => {
  const itemId = req.params.id;
  let arr = [];
  try {
    const item = await items.findById({ _id: itemId });
    // console.log(item);

    if (!item) {
      res.status(StatusCodes.NOT_FOUND).send("Invalid item Id");
    } else {
      arr = item.itemPictures;
      const delItem = await items.findByIdAndDelete({ _id: itemId });
      if (delItem) {
        try {
          arr.forEach((file) => {
            fs.unlinkSync(file);
          });
        } catch (error) {
          // console.log(error);
        }
        res.status(StatusCodes.OK).json("Item deleted");
      } else {
        res.status(StatusCodes.OK).json("Item doesn't exist or deleted");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.EXPECTATION_FAILED).json(error);
  }
};
module.exports = deleteItem;
