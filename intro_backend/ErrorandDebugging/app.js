// import the module
const http = require("http");
const testSyntax = require("./syntax");
const runtime = require("./runtime");

// create the server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
//   testSyntax();
    runtime();

});

// listen and creating the port
const PORT = 3020;
server.listen(PORT, () => {
  console.log(`Sever is running at address http://localhost:${PORT}`);
});
