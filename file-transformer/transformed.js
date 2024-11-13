"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path = require("path");
var http = require("http");
// Define paths for input and output files
var inputFile = path.join(__dirname, "input.txt");
var outputFile = path.join(__dirname, "output.txt");
// Function to check if a file exists
var fileExists = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fs_1.promises.access(filePath)];
            case 1:
                _b.sent();
                return [2 /*return*/, true];
            case 2:
                _a = _b.sent();
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Function to read input file, transform to uppercase, and save to output file
var transformFile = function () { return __awaiter(void 0, void 0, void 0, function () {
    var inputExists, data, transformData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fileExists(inputFile)];
            case 1:
                inputExists = _a.sent();
                if (!inputExists) {
                    throw new Error("Input file ".concat(inputFile, " is not found"));
                }
                return [4 /*yield*/, fs_1.promises.readFile(inputFile, "utf8")];
            case 2:
                data = _a.sent();
                transformData = data.toUpperCase();
                // Write transformed data to the output file
                return [4 /*yield*/, fs_1.promises.writeFile(outputFile, transformData, "utf8")];
            case 3:
                // Write transformed data to the output file
                _a.sent();
                console.log("Data has been copied to ".concat(outputFile));
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                if (err_1 instanceof Error) {
                    console.error("Error occurred: ".concat(err_1 === null || err_1 === void 0 ? void 0 : err_1.message));
                }
                else {
                    console.error("An unexpected error occurred");
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
// Function to handle incoming HTTP requests
var handleRequest = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var outputExists, data, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.url === "/output")) return [3 /*break*/, 6];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fileExists(outputFile)];
            case 2:
                outputExists = _a.sent();
                if (!outputExists) {
                    res.writeHead(404, { "Content-Type": "text/plain" });
                    res.end("Output file not found");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, fs_1.promises.readFile(outputFile, "utf8")];
            case 3:
                data = _a.sent();
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(data);
                return [3 /*break*/, 5];
            case 4:
                err_2 = _a.sent();
                if (err_2 instanceof Error) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Error occurred: ".concat(err_2 === null || err_2 === void 0 ? void 0 : err_2.message));
                }
                else {
                    console.error("An unexpected error occurred");
                }
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 7];
            case 6:
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("File not found");
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
// Function to start the server
var listenServer = function () { return __awaiter(void 0, void 0, void 0, function () {
    var server, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                server = http.createServer(handleRequest);
                server.listen(3000, function () {
                    console.log("Server running at http://localhost:3000/output");
                });
                return [4 /*yield*/, transformFile()];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                if (err_3 instanceof Error) {
                    console.error("Error occurred: ".concat(err_3 === null || err_3 === void 0 ? void 0 : err_3.message));
                }
                else {
                    console.error("An unexpected error occurred");
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Start the server
listenServer();
