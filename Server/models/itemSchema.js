const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
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
  itemProperties: [],
});

module.exports.items = mongoose.model("item", itemSchema);
