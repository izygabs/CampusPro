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
const {
  upload,
  uploadHostels,
  uploadItems,
} = require("../validators/uploadFile");
const verifyToken = require("../validators/verifyToken");
const logOut = require("../controllers/logOut");
const changePassword = require("../controllers/changePassword");

const route = express.Router();

route.post("/api/signUp", signUp);

route.post("/api/login", login);

route.post(
  "/api/uploadProperties",
  verifyToken,
  uploadHostels.array("hostels", 10),
  uploadProperty
);

route.post(
  "/api/uploadItems",
  verifyToken,
  uploadItems.array("itemImages", 10),
  uploadItem
);

route.put(
  "/api/property/:id",
  verifyToken,
  uploadHostels.array("hostels", 10),
  updateProperty
);

route.put(
  "/api/item/:id",
  verifyToken,
  uploadItems.array("itemImages", 10),
  updateItem
);

route.get("/api/allProperties", verifyToken, viewProperties);

route.get("/api/allItems", viewItems);

route.get("/api/property/:id", verifyToken, viewPropertyById);

route.get("/api/item/:id", verifyToken, viewItemById);

route.delete("/api/property/:id", verifyToken, deleteProperty);

route.delete("/api/item/:id", verifyToken, deleteItem);

route.get("/api/logout", verifyToken, logOut);

route.put("/api/changePassword/:id", verifyToken, changePassword);

module.exports = route;
