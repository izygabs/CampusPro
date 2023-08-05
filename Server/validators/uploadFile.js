const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./User_Images");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const hostelStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Hostel_Images");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const itemsStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Items_Images");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: storage });
const uploadHostels = multer({
  storage: hostelStorage,
  limits: {
    files: {
      min: 5, // Minimum number of files
      max: 15, // Maximum number of files
    },
    fileSize: {
      maxSize: "8mb",
    },
  },
});

const uploadItems = multer({
  storage: itemsStorage,
  limits: {
    files: {
      min: 5, // Minimum number of files
      max: 15, // Maximum number of files
    },
    fileSize: {
      maxSize: "8mb",
    },
  },
});
module.exports = { upload, uploadHostels, uploadItems };
