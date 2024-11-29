// importing the module http using required keyword
const http = require('http');

// now i have create server 
const server = http.createServer((req, res)=> {
    console.log(req.url, req.method,req.headers);
    // process.exit();  // to exit from event loop 
    // res.setHeader('Content-Type', 'json'); 

    // best on url 
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Learning node</title></head>');
        res.write('<body><h1>Welcom to Home.</h1></body>');
        res.write('</html>');
        return res.end(); // this is for end the respone and send it 

    } else if(req.url === '/products'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Learning node</title></head>');
        res.write('<body><h1>Checkout the products</h1></body>');
        res.write('</html>');
        return res.end(); // this is for end the respone and send it 

    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Learning node</title></head>');
        res.write('<body><h1>Hi, My name is Bishal koirala.</h1></body>');
        res.write('</html>');
        res.end(); // this is for end the respone and send it 


});

// now listen server 
const PORT = 3003;
server.listen(PORT, ()=> {
    console.log(`Server running on address http://localhost:${PORT}}`);
});