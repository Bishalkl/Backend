// External modules
const express = require("express");
const hostRouter = express.Router();

// Local module
const homesController = require("../controllers/homes");

// routing for get
hostRouter.get("/add-home", homesController.getAddHome);

// routing for post
hostRouter.post("/add-home", homesController.postAddedHome);
hostRouter.get("/hostHomelist", homesController.HostHome);

// exporting
module.exports = hostRouter;
