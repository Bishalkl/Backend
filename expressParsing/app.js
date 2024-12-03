const express = require("express");
const app = express();
const bodyParser = require("body-parser");

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

// Middleware to handle GET request to '/'
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Home Page</h1>`);
});

// Middleware to handle GET request to `/contact-us`
app.get("/contact-us", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Us</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                input, textarea, button {
                    padding: 10px;
                    font-size: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                button {
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <h1>Contact Us</h1>
            <form action="/contact-us" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method,req.body);
  next();
});

// using bodyParser middleware
app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.send(`<h1>We will contact you shortly</h1>`);
});

// Start the server
const PORT = 3025;
app.listen(PORT, () => {
  console.log(`Server is running at address http://localhost:${PORT}`);
});
