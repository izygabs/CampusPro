const { StatusCodes } = require("http-status-codes");
const { items } = require("../models/itemSchema");
const fs = require("fs");

const deleteItem = async (req, res) => {
  const itemId = req.params.id;
  let arr = [];
  try {
    const item = await items.findById({ _id: itemId });
    // console.log(item);

    arr = item.itemPictures;
    const delItem = await items.findByIdAndDelete({ _id: itemId });
    if (delItem) {
      try {
        arr.forEach((file) => {
          fs.unlinkSync(file);
        });
      } catch (error) {
        console.log(error);
      }
      res.status(200).json({ Message: "Item deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(403).json({ Error: error });
  }
};
module.exports = deleteItem;
