// First import the http module
const http = require("http");

// function that make boilerplate for other link page
const htmlBoilerplate = (linkTitle) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practise-project</title>
</head>
<body>
  <h1>Welcome to ${linkTitle}.</h1>
</body>
</html>
`;
};

// now create the server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Practise-Project</title>
      </head>
      <body>
        <a href="/home">Home</a> |
        <a href="/men">Men</a> |
        <a href="/women">Women</a> |
        <a href="/kids">Kids</a> |
        <a href="/cart">Cart</a>
      </body>
      </html>`);
    return res.end();
  }

  // create list of routes
  const routes = ["/home", "/men", "/women", "/kids", "/cart"];
  // now create the linktitle
  const linkTitle = req.url.substring(1); // removing the / from routes
  if (routes.includes(req.url)) {
    res.write(
      htmlBoilerplate(linkTitle.charAt(0).toUpperCase() + linkTitle.slice(1))
    );
    return res.end();
  }

  // 404 error page for undefined routes
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Practise-project</title>
</head>
<body>
  <h1>404 - Page Not Found</h1>
</body>
</html>`);
  res.end();
});

// now create the port
const PORT = 3007;

// listen the server
server.listen(PORT, () => {
  console.log(`Server is running at adress http://localhost:${PORT}`);
});
