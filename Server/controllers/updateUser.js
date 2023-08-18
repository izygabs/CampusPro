const { user } = require("../models/userSchema");
const fs = require("fs");

const updateUser = async (req, res) => {
  const profilePic = req.file.path;
  const value = req.body;
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
    res.status(403).json({ error: "Update fail" });
  }
};
module.exports = updateUser;
