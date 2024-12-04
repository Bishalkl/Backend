const express = require("express");
const userRouter = require("./routes/userRouter");
const contactRouter = require("./routes/contactRouter");
const app = express();

// Middleware 1: Log the request path
app.use((req, res, next) => {
  console.log(req.path);
  next();
});

// Middleware 2: Log the request method
app.use((req, res, next) => {
  console.log(req.method);
  next();
});

// Middleware 3: Dummy response
app.use((req, res, next) => {
  console.log("Third middleware to return response");
  next();
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data
// Middleware to handle GET request to '/'
app.use(userRouter);

app.use(contactRouter);

// Start the server
const PORT = 3024;
app.listen(PORT, () => {
  console.log(`Server is running at address http://localhost:${PORT}`);
});
