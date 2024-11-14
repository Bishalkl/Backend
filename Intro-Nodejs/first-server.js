"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// creating a first server
var http = require("http");
var server = http.createServer(function (req, res) {
    console.log(req);
});
var PORT = 3001;
server.listen(PORT, function () {
    console.log("Server running on address http://localhost:".concat(PORT));
});
