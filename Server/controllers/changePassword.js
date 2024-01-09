const { StatusCodes } = require("http-status-codes");
const { user } = require("../models/userSchema");
const validator = require("../validators/joiValidation");
const bcrypt = require("bcrypt");

const changePassword = async (req, res) => {
  const userId = req.user;
  const value = req.body;
  console.log(value);

  try {
    const userExist = await user.findById({ _id: userId });
    // console.log(userExist);
    let verifyPassword = await bcrypt.compare(
      value.currentPassword,
      userExist.password
    );
    if (verifyPassword) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(value.newPassword, salt);
      const agent = await user.findByIdAndUpdate(
        { _id: userId },
        // { password: value.currentPassword },
        { password: hashedPassword },
        { new: true }
      );
      res.status(201).json({ message: "Password changed successfully" });
    } else res.status(403).json({ message: "Current password is incorrect" });
  } catch (error) {
    console.log(error);
    res.status(417).json({ Error: error });
  }
};
module.exports = changePassword;
