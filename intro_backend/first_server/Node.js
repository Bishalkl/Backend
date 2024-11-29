// importing the module 
const http = require('http');

// creating server 
const server = http.createServer((req, res) => {
    console.log(req);
});

// PORT
const PORT = 3001;

// listening server
server.listen(PORT,() => {
    console.log(`Server running on address http://localhost:${PORT}`)
});