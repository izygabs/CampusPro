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

const route = express.Router();

route.post("/api/signUp", signUp);

route.post("/api/login", login);

route.post("/api/uploadProperties", uploadProperty);

route.post("/api/uploadItems", uploadItem);

route.put("/api/property/:id", updateProperty);

route.put("/api/item/:id", updateItem);

route.get("/api/allProperties", viewProperties);

route.get("/api/allItems", viewItems);

route.get("/api/property/:id", viewPropertyById);

route.get("/api/item/:id", viewItemById);

route.delete("/api/property/:id", deleteProperty);

route.delete("/api/item/:id", deleteItem);

module.exports = route;