const multer = require("multer");
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./User_Images");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname + "_" + Date.now() + pathextname(file.originalname));
  },
});

const hostelStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Hostel_Images");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname );
  },
});

const itemsStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Items_Images");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const uploadHostels = multer({
  storage: hostelStorage,
});

const uploadItems = multer({
  storage: itemsStorage,
});
module.exports = { upload, uploadHostels, uploadItems };
