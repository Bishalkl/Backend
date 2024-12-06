// External Modules
const express = require("express");
// core Modules
const path = require("path");

// Local Module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootdir = require("./utils/pathUtils");
const errorsController = require("./controllers/error");

const app = express();

// adding the middleware for ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

// for making my css access it from public
app.use(express.static(path.join(rootdir, "public")));

app.use(errorsController.notFoundPage);

// Start the server
const PORT = process.env.PORT || 3026;
app.listen(PORT, () => {
  console.log(`Server is running at address http://localhost:${PORT}`);
});
