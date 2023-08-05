module.exports.dbSchemaErrors = (err) => {
  let errors = { name: "", email: "" };

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  } else {
    const key = Object.keys(err.keyPattern);
    if (key[0] === "phoneNumber") {
      return "Phone Number already exist";
    } else if (key[0] === "email") {
      return "Email address already exist";
    } else if (key[0] === "altPhoneNumber") {
      return "Alt Phone Number already exist";
    }
  }
  return errors;
};

module.exports.JoiErrorHandler = (error) => {
  let errors = "";

  var errorType = error.details[0].type;
  switch (errorType) {
    case "string.empty":
      errors += error.message;
      break;
    case "string.pattern.base":
      errors += error.message;
      break;
    case "any.required":
      errors += error.message;
      break;
    case "string.email":
      errors += error.message;
      break;
    case "any.only":
      errors += error.message;
      break;
    default:
      errors += error.message;
      break;
  }
  return errors;
};

module.exports.PropertySchemaErrors = (err) => {
  let errors = {};

  if (
    err.message.includes("hostel validation failed" || "item validation failed")
  ) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
