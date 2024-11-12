"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger(id, url) {
        var _this = _super.call(this) || this; // Call the parent constructor
        _this.id = id;
        _this.url = url;
        return _this;
    }
    // Method to log a message and emit an event
    Logger.prototype.logMessage = function (message) {
        var logData = {
            id: this.id,
            url: this.url,
        };
        console.log(message);
        this.emit("messageLogged", logData); // Emit the event with the log data
    };
    // Register listener for the 'messageLogged' event
    Logger.prototype.onMessageLogged = function (listener) {
        this.on("messageLogged", listener);
    };
    return Logger;
}(events_1.EventEmitter));
// Create an instance of Logger with specific id and url
var logger = new Logger(1, "https://");
// Register a listener for the 'messageLogged' event
logger.onMessageLogged(function (data) {
    console.log("".concat(data.url, " (ID: ").concat(data.id, ") are logging!"));
});
// Log a message and emit the 'messageLogged' event
logger.logMessage("Logging event");
