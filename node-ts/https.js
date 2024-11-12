"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    if (req.url === "/") {
        res.write("Hello world");
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
});
//Make the server listen on port 3000
server.listen(3000, function () {
    console.log("Listening on port 3000...");
});
