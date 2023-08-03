const express = require("express");
const app = express();
const PORT = process.env.PORT || 6600;
const connectMongoose = require("./models/connectMongoose");

app.listen(PORT, async () => {
  await connectMongoose();
  console.log(`Server is Listening on port ${PORT}`);
});
