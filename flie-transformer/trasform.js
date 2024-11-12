"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the required modules
var fs = require("fs");
var path = require("path");
var http = require("http");
// Define ther file paths
var inputFilePath = path.join(__dirname, "input.txt");
var outputFilePath = path.join(__dirname, "output.txt");
//Read from the input file
fs.readFile(inputFilePath, "utf8", function (err, data) {
    if (err) {
        console.log("Error reading file: ".concat(err));
        return;
    }
    // Trasform ther text to uppercase
    var transformedData = data.toUpperCase();
    // write the transformed text to the output file
    fs.writeFile(outputFilePath, transformedData, function (err) {
        if (err) {
            console.log("Error writing to file: ".concat(err));
            return;
        }
        console.log("Data transformed and saved to ".concat(outputFilePath));
    });
});
// create an HTTPserver to display the transformed text
var server = http.createServer(function (req, res) {
    if (req.url === "/output") {
        // Read the transformed file and send it in the response
        fs.readFile(outputFilePath, "utf8", function (err, data) {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error reading output file");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});
// Start the server on port 3000
server.listen(3000, function () {
    console.log("Server running at http://localhost:3000/output");
});
