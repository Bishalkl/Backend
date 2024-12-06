// External Module
const express = require("express");
const userRouter = express.Router();

// local Module
const homesController = require("../controllers/homes");

userRouter.get("/", homesController.goHome);

module.exports = userRouter;
