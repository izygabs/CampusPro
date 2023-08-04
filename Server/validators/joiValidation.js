const Joi = require("joi");

const signUp = (data) => {
  Schemas = Joi.object({
    firstName: Joi.string().required().trim().messages({
      "string.base": `First name should be a "text"`,
      "string.empty": `Firstname cannot be empty`,
      "any.required": `Firstname field is required`,
    }),
    lastName: Joi.string().required().trim().messages({
      "string.base": `Lastname should be a "text"`,
      "string.empty": `Lastname cannot be empty`,
      "any.required": `Lastname field is required`,
    }),
    Phone: Joi.string()
      .trim()
      .required()
      .pattern(new RegExp(/^((\+234)+|0)[7-9]{1}[0-9]{9}$/))
      .messages({
        "string.pattern.base": `Invalid phone number`,
        "any.required": "phone Number must not be empty",
      }),

    Email: Joi.string().trim().email().required().messages({
      "string.email": `Invalid email, for instance 'example@gmail.com'`,
      "any.required": `this field is require`,
      "string.empty": `"email" cannot be empty field`,
    }),
    Password: Joi.string()
      .required()
      .min(8)
      .pattern(
        new RegExp(/(?=.*[A-Z])[a-zA-Z0-9]+[\#\@\$\%\&\*\(\)\>\<\~\{\}]+/)
      )
      .messages({
        "string.pattern.base": `Password must contain atleast one capital letter and one special characters`,
        "any.required": `Password field is required`,
        "string.min": `Password length must at least be 8 characters long`,
      }),

    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .error(new Error("Passwords do not match")),
  });
  return Schemas.validate(data);
};

module.exports.signUp = signUp;
