// Core modules
const path = require("path");

// External module
const express = require("express");

// Local Module
const contactRouter = express.Router();
const rootdir = require("../utils/pathUtils");

// Middleware to handle GET request to `/contact-us`
contactRouter.get("/contact-us", (req, res) => {
  res.sendFile(path.join(rootdir, "views", "getContact.html"));
});

// Middleware to handle POST request to `/contact-us`

contactRouter.post("/contact-us", (req, res) => {
  const { name, email, message } = req.body;
  res.send(
    `<h1>Thank you, ${name}! We have received your email (${email}).</h1>`
  );
});

module.exports = contactRouter;
