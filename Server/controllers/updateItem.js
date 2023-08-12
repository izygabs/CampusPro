const { StatusCodes } = require("http-status-codes");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");
const { items } = require("../models/itemSchema");
const fs = require("fs");

const updateItem = async (req, res) => {
  const itemPics = req.files;
  const merchantId = req.user;
  const itemId = req.params.id;
  const { error, value } = validator.updateItemSchema(req.body);
  // if (error) {
  //   itemPics.forEach((file) => {
  //     fs.unlinkSync(file.path);
  //   });
  //   const errors = errorHandler.JoiErrorHandler(error);
  //   res
  //     .status(StatusCodes.NOT_ACCEPTABLE)
  //     .json({ "Input validation failed": errors });
  // } else {
  try {
    const existItems = await items.findById({ _id: itemId });
    const itemPic = itemPics.map((file) => file.path);
    let updateItems = itemPic.filter((pic) => {
      return !existItems.itemPictures.includes(pic);
    });
    const item = await items.findByIdAndUpdate(
      { _id: itemId },
      {
        $set: value,
        $push: { itemPictures: { $each: updateItems } },
        // $addToSet: { itemProperties: { $each: data } },
      },
      { new: true }
    );
    res.status(StatusCodes.CREATED).json({ "Item update successfull": item });
    // const merchant = await items.findByIdAndUpdate(merchantId,{$set: value});
  } catch (error) {
    itemPics.forEach((file) => {
      fs.unlinkSync(file.path);
    });
    res.status(StatusCodes.EXPECTATION_FAILED).json({ error });
  }
};
// res.status(StatusCodes.CREATED).json("Item updated");
// };
module.exports = updateItem;
