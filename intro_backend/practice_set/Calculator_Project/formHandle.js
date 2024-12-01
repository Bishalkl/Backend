// Importing the module
const fs = require("fs");

const addNumber = require("./addNumber");
// creating the function for handle form for calculator
const formHandler = (req, res) => {
  // console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        a {
            text-decoration: none;
            color: #007bff;
            font-weight: bold;
        }
        a:hover {
            color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Welcome to the home page</h1>
    <p>Go to <a href="/calculator">Calculator</a></p>
</body>
</html>
`);
    return res.end();
  }
  if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        form {
            max-width: 300px;
            margin: 0 auto;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            padding: 10px 15px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .result {
            margin-top: 15px;
            font-size: 1.2em;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Simple Calculator</h1>
    <form action="/calculate-result" method="POST">
        <label for="number1">Number 1</label>
        <input type="number" id="number1" name="number1" required>
        
        <label for="number2">Number 2</label>
        <input type="number" id="number2" name="number2" required>
        
        <button type="submit" ">Calculate Sum</button>
    </form>
</body>
</html>
`);
    return res.end();
  }
  if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
    let body = "";

    // collecting the data from the request body
    req.on("data", (chunk) => {
      body += chunk;
    });

    // now after data coming
    req.on("end", () => {
      // Parsing the form data
      const params = new URLSearchParams(body);

      const number1 = parseFloat(params.get("number1"));
      const number2 = parseFloat(params.get("number2"));

      // calling the addNumber function
      const result = addNumber(number1, number2);

      // for test in terminal
      console.log(result);
      // first test writing in the file
      fs.writeFile("user.txt", `Result is ${result}`, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
          res.setHeader("Content-Type", "text/html");
          res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Calculator</title>
        </head>
        <body>
            <h1>There was an error processing your request</h1>
        </body>
        </html>
    `);
        }
        console.log("Data written successfully");
        res.setHeader("Content-Type", "text/html");
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Calculator</title>
        </head>
        <body>
            <h1>The result is ${result}</h1>
        </body>
        </html>
    `);
        return res.end();
      });
    });
  }
};

module.exports = formHandler;
