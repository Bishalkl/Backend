// importing the module http using required keyword
const http = require('http');

// now i have create server 
const server = http.createServer((req, res)=> {
    console.log(req);
    process.exit();  // to exit from event loop 
});

// now listen server 
const PORT = 3002;
server.listen(PORT, ()=> {
    console.log(`Server running on address http://localhost:${PORT}}`);
});