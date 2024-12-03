// External Modules
const express = require("express");
// core Modules
const path = require("path");

// Local Module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootdir = require("./utils/pathUtils")

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootdir, "views", "404page.html"));
});

// Start the server
const PORT = 3026;
app.listen(PORT, () => {
  console.log(`Server is running at address http://localhost:${PORT}`);
});
