const express = require("express");

const signUp = require("../controllers/signUp");

const login = require("../controllers/login");

const uploadProperty = require("../controllers/uploadProperty");

const uploadItem = require("../controllers/uploadItem");

const updateProperty = require("../controllers/updatePropert");

const updateItem = require("../controllers/updateItem");

const viewProperties = require("../controllers/viewProperties");

const viewItems = require("../controllers/viewItems");

const viewPropertyById = require("../controllers/viewPropertyById");

const viewItemById = require("../controllers/viewItemById");

const deleteProperty = require("../controllers/deleteProperty");

const deleteItem = require("../controllers/deleteItem");
const upload = require("../validators/uploadFile");
const verifyToken = require("../validators/verifyToken");
const logOut = require("../controllers/logOut");

const route = express.Router();

route.post("/api/signUp", upload.single("ProfilePic"), signUp);

route.post("/api/login", login);

route.post(
  "/api/uploadProperties",
  verifyToken,
  upload.array("hostels"),
  uploadProperty
);

route.post("/api/uploadItems", verifyToken, upload.array("items"), uploadItem);

route.put(
  "/api/property/:id",
  verifyToken,
  upload.array("hostels"),
  updateProperty
);

route.put("/api/item/:id", verifyToken, upload.array("items"), updateItem);

route.get("/api/allProperties", verifyToken, viewProperties);

route.get("/api/allItems", verifyToken, viewItems);

route.get("/api/property/:id", verifyToken, viewPropertyById);

route.get("/api/item/:id", verifyToken, viewItemById);

route.delete("/api/property/:id", verifyToken, deleteProperty);

route.delete("/api/item/:id", verifyToken, deleteItem);
route.get("/api/logout", verifyToken, logOut);

module.exports = route;
