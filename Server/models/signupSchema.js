const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  altPhoneNumber: {
    type: Number,
    unique: true,
  },
  password: {
    type: Number,
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

module.exports.register = mongoose.model("user", signUpSchema);
