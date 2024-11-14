"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
fs.writeFile("Output.txt", "writing file", function (err) {
    if (err)
        console.log("Error occurred");
    else
        console.log("File Written Successfully");
});
