// External modules
const express = require("express");
const path = require("path");

// local modules
const rootdir = require("../utils/pathUtils");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootdir, "views", "addHomeGet.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootdir, "views", "addHomePost.html"));
});

module.exports = hostRouter;
