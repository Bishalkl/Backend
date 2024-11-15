"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var PORT = 3002;
var server = http.createServer(function (req, res) {
    var _a;
    console.log(req.url, req.method, req.headers);
    res.setHeader("Content-Type", "text/html");
    var sendResponse = function (title, message) {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>".concat(title, "</title></head>"));
        res.write("<body><h1>".concat(message, "</h1></body>"));
        res.end();
    };
    switch ((_a = req.url) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) {
        case "/":
            res.write("<html>");
            res.write("<head><title>First-practise-node</title></head>");
            res.write("<body>");
            res.write("<nav>");
            res.write("<a href='/home'>Home</a> | ");
            res.write("<a href='/men'>Men</a> | ");
            res.write("<a href='/women'>Women</a> | ");
            res.write("<a href='/kids'>Kids</a> | ");
            res.write("<a href='/cart'>Cart</a>");
            res.write("</nav>");
            res.write("</body>");
            res.write("</html>");
            res.end();
            break;
        case "/home":
            sendResponse("Home", "Welcome to Home");
            break;
        case "/men":
            sendResponse("Men", "Welcome to Men");
            break;
        case "/women":
            sendResponse("Women", "Welcome to Women");
            break;
        case "/kids":
            sendResponse("Kids", "Welcome to Kids");
            break;
        case "/cart":
            sendResponse("Cart", "Welcome to cart");
            break;
        default:
            res.statusCode = 404;
            sendResponse("404 - Not Found", "404 - Page Not Found");
    }
});
server.listen(PORT, function () {
    console.log("Server running on address http://localhost:".concat(PORT));
});
