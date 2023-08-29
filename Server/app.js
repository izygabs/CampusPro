const express = require("express");
const app = express();
const PORT = process.env.PORT || 6600;
const connectMongoose = require("./models/connectMongoose");
const route = require("./routes/allRoutes");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(cookieParser());
app.use(cors());
app.use(express.json({ limit: 52428800 }));
app.use("/Items_Images", express.static(path.join(__dirname, "Items_Images")));
app.use(
  "/Hostel_Images",
  express.static(path.join(__dirname, "Hostel_Images"))
);
app.use("/User_Images", express.static(path.join(__dirname, "User_Images")));
app.use(route);

// Error-handling middleware for Multer errors
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred during file upload
    console.log(err.code);
    if (err.code == "LIMIT_UNEXPECTED_FILE") {
      res
        .status(406)
        .json({ Message: "Maximum number of pictures you upload is 10" });
    } else {
      console.log(err.message);
      res.status(406).json({ Message: err.message });
    }
  } else {
    // For other errors, or if the error is not from Multer
    console.log(err);
    res.status(500).json({ Message: err.message });
  }
});

app.listen(PORT, async () => {
  await connectMongoose();
  console.log(`Server is Listening on port ${PORT}`);
});
