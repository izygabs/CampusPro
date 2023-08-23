const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema(
  {
    agentID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    campusName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    hostelStatus: {
      type: String,
      default:"new"
      
    },
    hostelImages: [String],
    houseProperties: [String],
  },
  { timestamps: true }
);

module.exports.hostelProps = mongoose.model("hostel", hostelSchema);
