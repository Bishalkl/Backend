// core module
const express = require("express");

// local module
const requestHandler = require("./user");

// External Module
const app = express();

// Adding middleware
app.use("/",(req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
});

app.post("/submit-details",(req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
});

app.use("/",(req, res, next) => {
    console.log("Came in second middleware", req.url, req.method);
    res.send("<p>Welcome to third middleware</p>")
  });

// listening the server and creating the port address
const PORT = 3013;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
