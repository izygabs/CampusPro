const { StatusCodes } = require("http-status-codes");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");
const { items } = require("../models/itemSchema");

const updateItem = async (req, res) => {
  const itemPics = req.files;
  const merchantId = req.user;
  const { error, value } = validator.updateItemSchema(req.body);
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
      const existItems = await items.findById({ _id: req.params.id });
      const { _id, itemProperties, itemPictures } = existItems;
      console.log("Existing", itemPictures);
      // console.log(itemPic);
      let updateItems = itemPictures.filter((pic) => {
        return itemPic.includes(pic);
      });
      console.log("update", updateItems);

      console.log("new items", itemPic);
      res.status(200).json({ itemPic });
      // const merchant = await items.findByIdAndUpdate(merchantId,{$set: value});
    } catch (error) {
      console.log(error);
      res.status(400).json({ error });
    }
  }
  // res.status(StatusCodes.CREATED).json("Item updated");
};
module.exports = updateItem;
