const { StatusCodes } = require("http-status-codes");
const { user } = require("../models/userSchema");
const validator = require("../validators/joiValidation");
const bcrypt = require("bcrypt");

const changePassword = async (req, res) => {
  const userId = req.params.id;
  const { value } = validator.newPasswordSchema(req.body);
  try {
    const userExist = await user.findById({ _id: userId });
    console.log(userExist);
    if (!userExist) {
      res.status(StatusCodes.NOT_FOUND).send("User not found");
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(value.newPassword, salt);
      const agent = await user.findByIdAndUpdate(
        { _id: userId },
        // { password: value.currentPassword },
        { password: hashedPassword },
        { new: true }
      );
      res
        .status(StatusCodes.CREATED)
        .json({ Message: "Password changed successfully" });
    }
  } catch (error) {
    res.status(StatusCodes.EXPECTATION_FAILED).json({ Error: error });
  }
};
module.exports = changePassword;
