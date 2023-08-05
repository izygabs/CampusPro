const { StatusCodes } = require("http-status-codes");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");
const { user } = require("../models/userSchema");
const { items } = require("../models/itemSchema");
let fs = require("fs");

const uploadItem = async (req, res, next) => {
  const itemPics = req.files;
  const merchantId = req.user;
  const { error, value } = validator.itemSchema(req.body);
  if (itemPics == null || itemPics.length < 5) {
    itemPics.forEach((file) => {
      fs.unlinkSync(file.path);
      // to delete images saved into the items image folder if validation fails
    });
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ "Image Error": "You must upload minimum of 5 pictures" });
  } else {
    if (error) {
      itemPics.forEach((file) => {
        fs.unlinkSync(file.path);
      });
      const errors = errorHandler.JoiErrorHandler(error);
      res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json({ "Input validation failed": errors });
    } else {
      try {
        const itemPic = itemPics.map((file) => file.path);
        const seller = new items({
          merchantID: merchantId,
          category: value.category,
          itemName: value.itemName,
          description: value.description,
          price: value.price,
          quantity: value.quantity,
          campus: value.campus,
          location: value.location,
          itemPictures: [],
        });
        const newSeller = await seller.save();
        if (newSeller) {
          await items.findByIdAndUpdate(
            { _id: newSeller._id },
            { $push: { itemPictures: { $each: itemPic } } },
            { new: true }
          );
        }
        res.status(StatusCodes.CREATED).send("Item uploaded");
      } catch (error) {
        itemPics.forEach((file) => {
          fs.unlinkSync(file.path);
        });
        console.log(error);
        res
          .status(StatusCodes.BAD_REQUEST)
          .send({ "Item failed to upload": error });
      }
    }
  }
};
module.exports = uploadItem;
