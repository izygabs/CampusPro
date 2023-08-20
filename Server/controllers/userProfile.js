const { user } = require("../models/userSchema");

const userProfile = async (req, res) => {
  const userId = req.user;
  //   console.log(userId);
  try {
    const profile = await user.findById(
      { _id: userId },
      "firstName lastName profilePic phoneNumber email"
    );
    // console.log(profile);
    res.status(200).json({ Profile: profile });
  } catch (error) {
    console.log("Error in getting the users", error);
  }
};
module.exports = userProfile;
