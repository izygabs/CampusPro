var mongoose = require("mongoose");
require("dotenv").config();

let uri = process.env.ATLAS_DATABASE || process.env.COMPASS_DATABASE;

const connectMongoose = () => {
  return mongoose
    .connect(uri)
    .then(() => {
      console.log(`Connected to ${uri}`);
    })
    .catch((err) => {
      console.log(`Connection to ${uri} failed ${err}`);
    });
};

module.exports = connectMongoose;
