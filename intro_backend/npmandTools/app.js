const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3017;
server.listen(PORT, () => {
  console.log(`Server is running on address https://localhost:${PORT}`);
});
