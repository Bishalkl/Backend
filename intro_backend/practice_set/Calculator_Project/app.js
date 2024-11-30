// importing module
const http = require("http");
const formHandler = require("./formHandle")

// creating server
const server = http.createServer(formHandler);

// listen the server and creating the port
const PORT = 3013;

server.listen(PORT, () => {
  console.log(`Server is running address at http://localhost:${PORT}`);
});

