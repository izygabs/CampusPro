const express = require("express");
const app = express();
const PORT = process.env.PORT || 6600;
const connectMongoose = require("./models/connectMongoose");
const route = require("./routes/allRoutes");
const cookieParser = require("cookie-parser");

app.use(route);

app.use(express.json());

app.use(cookieParser());

app.listen(PORT, async () => {
  await connectMongoose();
  console.log(`Server is Listening on port ${PORT}`);
});
