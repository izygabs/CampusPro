const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
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
      lowerCase: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    altPhoneNumber: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      // required: true,
    },
    typeOfUser: {
      type: String,
      required: true,
    },
    propertyIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "hostel",
        },
      ],
    },

    itemIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "item",
        },
      ],
    },
    google: {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports.user = mongoose.model("user", userSchema);
