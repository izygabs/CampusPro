const { StatusCodes } = require("http-status-codes");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");
const { user } = require("../models/userSchema");
const { items } = require("../models/itemSchema");

const uploadItem = async (req, res, next) => {
  const merchantId = req.user;
  const { error, value } = validator.itemSchema(req.body);
  let file = req.file;
  if (file == null) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ "Image Error": "Upload item images" });
  } else {
    if (error) {
      file && fs.unlinkSync(file.path);
      const errors = errorHandler.JoiErrorHandler(error);
      res.status(StatusCodes.NOT_ACCEPTABLE).json({ error: errors });
    } else {
      try {
        const merchant = await user.findById(merchantId);
        if (!merchant) {
          res.status(StatusCodes.NOT_FOUND).send("Merchant not found");
        } else {
          const seller = new items({
            merchantID: merchantId,
            category: value.category,
            itemName: value.itemName,
            description: value.description,
            price: value.price,
            quantity: value.quantity,
            campus: value.campus,
            location: value.location,
            itemImage: req.file.path,
          });
          await seller.save();
          res.status(StatusCodes.CREATED).send("Item uploaded");
        }
      } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).send("Item failed to upload");
      }
    }
  }
};
module.exports = uploadItem;
