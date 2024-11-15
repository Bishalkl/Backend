"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// creating a first server
var http = require("http");
var server = http.createServer(function (req, res) {
    console.log(req.url, req.method, req.headers);
    // process.exit(); // Stops event loop
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Complete Coding</title></head>");
        res.write("<body><h1>Welcome to Home</h1> </body>");
        res.write("</html>");
        return res.end();
    }
    else if (req.url === "/product") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Complete Coding</title></head>");
        res.write("<body><h1>Check out prodcuts</h1> </body>");
        res.write("</html>");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Like / Share / Subscribe </h1> </body>");
    res.write("</html>");
    res.end();
});
var PORT = 3001;
server.listen(PORT, function () {
    console.log("Server running on address http://localhost:".concat(PORT));
});
