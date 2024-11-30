// import module
const http = require("http");
const requestHandler = require("./user");

// creating the server
const server = http.createServer(requestHandler);

const PORT = 3011;

server.listen(PORT, () => {
  console.log(`Server is running at address http://localhost:${PORT}`);
});