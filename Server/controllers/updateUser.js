const { user } = require("../models/userSchema");
const fs = require("fs");

const updateUser = async (req, res) => {
  // console.log(req.file);
  const value = req.body;
  // console.log(value);
  const profilePic = req.file.path;

  const userId = req.user;
  try {
    const updatedUser = await user.findByIdAndUpdate(
      { _id: userId },
      { $set: { ...value, profilePic } },
      { new: true }
    );
    res.status(201).json({ message: "Profile updated" });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Update failed" });
  }
};
module.exports = updateUser;
