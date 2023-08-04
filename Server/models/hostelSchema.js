const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  campus: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  houseProperties: [],
});

module.exports.hostelProps = mongoose.model("hostel", hostelSchema);
