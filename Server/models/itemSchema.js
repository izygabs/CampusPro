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
<<<<<<< HEAD
  { timestamps: true }
);
=======
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
    type: String,
    required: true,
  },
  quantity: {
    type: String,
  },
  campus: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  itemImage: {
    type: String,
    required: true,
  },
  itemProperties: [],
});
>>>>>>> d35c91f4a8ac26cb302d139d927080a5deda2b40

module.exports.items = mongoose.model("item", itemSchema);
