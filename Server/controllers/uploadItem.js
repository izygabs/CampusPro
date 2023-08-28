const { StatusCodes } = require("http-status-codes");
const validator = require("../validators/joiValidation");
const errorHandler = require("../middlewares/handleError");
const { user } = require("../models/userSchema");
const { items } = require("../models/itemSchema");
let fs = require("fs");

const uploadItem = async (req, res) => {
  const arrayStatus= ['Pending', 'Approved', 'Rejected'];

  const itemPics = req.files;
  // console.log(req.files);
  const merchantId = req.user;
  // console.log(merchantId);
  let value = req.body;
  // console.log(value);

  if (itemPics == null || itemPics.length < 5) {
    // itemPics.forEach((file) => {
    //   fs.unlinkSync(file.path);
    //   // to delete images saved into the items image folder if validation fails
    // });
    res.status(406).json({ Message: "You must upload minimum of 5 pictures" });
  } else {
    try {
   let num= Math.floor(Math.random() * 3);

      const itemPic = itemPics.map((file) => file.path);
      const seller = new items({
        merchantID: merchantId,
        category: value.category,
        itemName: value.itemName,
        description: value.description,
        price: value.price,
        quantity: value.quantity,
        negotiable: value.negotiable,
        campus: value.campus,
        location: value.location,
        itemPictures: [],
        itemStatus: arrayStatus[num]
      });
      const newSeller = await seller.save();
      if (newSeller) {
        await items.findByIdAndUpdate(
          { _id: newSeller._id },
          { $push: { itemPictures: { $each: itemPic } } },
          { new: true }
        );
      }
      res.status(201).json({ Message: "Item uploaded" });
    } catch (error) {
      itemPics.forEach((file) => {
        fs.unlinkSync(file.path);
      });
      console.log(error);
      res.status(403).send({ Message: error });
    }
  }
};
module.exports = uploadItem;
