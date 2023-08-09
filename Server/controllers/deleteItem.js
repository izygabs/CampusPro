const { StatusCodes } = require("http-status-codes");
const { items } = require("../models/itemSchema");
const fs = require("fs");

const deleteItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await items.findById({ _id: itemId });
    console.log(item);
    const arr = item.itemPictures;
    console.log(arr);
    const delItem = await items.findByIdAndDelete({ _id: itemId });
    if (!item) {
      res.status(StatusCodes.NOT_FOUND).send("Invalid Id");
    } else {
      arr.forEach((file) => {
        fs.unlinkSync(file.path);
      });
      res.status(StatusCodes.OK).json("Item deleted");
    }
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.EXPECTATION_FAILED).json(error);
  }
};
module.exports = deleteItem;
