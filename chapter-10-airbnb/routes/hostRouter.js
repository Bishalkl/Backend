// External modules
const express = require("express");
const hostRouter = express.Router();

// Local module
const homesController = require("../controllers/homes");

// routing for get
hostRouter.get("/add-home", homesController.getAddHome);

// routing for post
hostRouter.post("/add-home", homesController.postAddedHome);

// exporting
module.exports = hostRouter;
