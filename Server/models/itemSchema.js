const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    merchantID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    category: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
    },
    campus: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    itemProperties: [String],
    itemPictures: [String],
  },
  { timestamps: true }
);

module.exports.items = mongoose.model("item", itemSchema);
