const express = require("express");
const app = express();
const PORT = process.env.PORT || 6600;
const connectMongoose = require("./models/connectMongoose");
const route = require("./routes/allRoutes");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const cors = require("cors");

app.use(cors());
app.use('/Hostel_Images', express.static(__dirname + "Hostel_Images"))
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(route);

{
  /* <em>// Redirect the user to the Google signin page</em>; */
}
// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );
{
  /* <em>// Retrieve user data using the access token received</em>; */
}
// app.get(
//   "/auth/google/callback",
//   // passport.authenticate("google", { session: false }),
//   (req, res) => {
//     jwt.sign(
//       { user: req.user },
//       process.env.SECRET_KEY,
//       {
//         expiresIn: "1h",
//       },
//       (err, token) => {
//         if (err) {
//           return res.json({
//             token: null,
//           });
//         }
//         res.json({
//           token,
//         });
//       }
//     );
//     res.redirect("/profile/");
//   }
// );
// {
//   /* <em>// profile route after successful sign in</em>; */
// }
app.get("/profile", (req, res) => {
  console.log(req);
  res.send("Welcome");
});

// Error-handling middleware for Multer errors
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred during file upload
    console.log(err.code);
    if (err.code == "LIMIT_UNEXPECTED_FILE") {
      res.status(400).send("Maximum number of pictures you upload is 10");
    } else {
      console.log(err.message);
      res.status(400).send("Multer Error: " + err.message);
    }
  } else {
    // For other errors, or if the error is not from Multer
    res.status(500).send("Something went wrong: " + err.message);
  }
});

app.listen(PORT, async () => {
  await connectMongoose();
  console.log(`Server is Listening on port ${PORT}`);
});
