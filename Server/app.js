const express = require("express");
const app = express();
const PORT = process.env.PORT || 6600;
const connectMongoose = require("./models/connectMongoose");
const route = require("./routes/allRoutes");
const cookieParser = require("cookie-parser");

<<<<<<< HEAD
app.use(cookieParser());

app.use(express.json());

=======
// middlewares
app.use(cookieParser());
app.use(express.json());
>>>>>>> 97e475525422a4dbb5f5d0827f345dedb2709c4e
app.use(route);

app.listen(PORT, async () => {
  await connectMongoose();
  console.log(`Server is Listening on port ${PORT}`);
});
