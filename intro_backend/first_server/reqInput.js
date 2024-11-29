// importing the module http using required keyword
const http = require("http");
// importing the module file using required keyword
const fs = require("fs");

// now i have create server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();  // to exit from event loop
  // res.setHeader('Content-Type', 'json');

  // best on url
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Learning Node</title></head>");
    res.write("<body>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<label for="name">Name:</label>');
    res.write('<input type="text" id="name" name="name" required><br><br>');
    res.write('<label for="gender">Gender:</label><br>');
    res.write(
      '<input type="radio" id="male" name="gender" value="male" required>'
    );
    res.write('<label for="male">Male</label><br>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" required>'
    );
    res.write('<label for="female">Female</label><br>');
    res.write(
      '<input type="radio" id="other" name="gender" value="other" required>'
    );
    res.write('<label for="other">Other</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); // this is for end the respone and send it
  } else if (req.url.toLocaleLowerCase() === "/submit-details" && req.method == "POST") {
    fs.writeFileSync('user.txt', 'Bishal koirala');
    res.statusCode = 302; //redirecting request code 
    res.setHeader('Location', '/'); //redirecting the url
    return res.end(); // this is for end the respone and send it
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Learning node</title></head>");
  res.write("<body><h1>Hi, My name is Bishal koirala.</h1></body>");
  res.write("</html>");
  res.end(); // this is for end the respone and send it
});

// now listen server
const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}}`);
});
