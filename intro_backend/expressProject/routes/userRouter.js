// External module
const express = require("express");
const path = require("path");

// local Module
const userRouter = express.Router();
const rootdir = require("../utils/pathUtils");
// Middleware to handle GET request to '/'
userRouter.get("/", (req, res) => {
  res.sendFile(path.join(rootdir, "views", "homePage.html"));
});

module.exports = userRouter;
