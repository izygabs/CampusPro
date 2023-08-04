const Joi = require("joi");

const signUp = (data) => {
  const schema = Joi.object({
    fisrtName: Joi.string.required().trim(),
    lastName: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    phoneNumber: Joi.number().required(),
    altPhoneNumber: Joi.number(),
    password: Joi.string().required().min(8).max(100),
    confirmPassword: Joi.string().required().min(8).max(100),
    profilePic: Joi.string().required(),
    address: Joi.string().trim(),
  });
  return schema.validate(data);
};

module.exports.signUp = signUp;
