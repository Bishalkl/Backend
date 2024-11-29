// importing the http module
const http = require("http");

// create the link page
// Home
// Men
// Women
// Kids
// Cart

// creating the function for html script
const htmlScript = (linkTitle) => {
  return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Practise exam</title>
            </head>
            <body>
               <h1>${linkTitle}</h1>
            </body>
            </html>`;
};

//creating the server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Practise exam</title>
            </head>
            <body>
                <nav>
                    <ul style="list-style: none; display: flex; gap: 20px; padding: 0;">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/men">Men</a></li>
                        <li><a href="/women">Women</a></li>
                        <li><a href="/kids">Kids</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </nav>
            </body>
            </html>
          `);
    return res.end();
  }

  const routes = ["/home", "/men", "/women", "/kids", "/cart"];
  const linkTitle = req.url.substring(1); // Removing the leading "/" to get the title
  if (routes.includes(req.url)) {
    res.write(
      htmlScript(linkTitle.charAt(0).toUpperCase() + linkTitle.slice(1))
    );
    return res.end();
  }
  res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Practise exam</title>
            </head>
            <body>
            <h1>404 - Page Not Found </h1>
            <a href="/"> Back to Navigation</a>
            </body>
            </html>
          `);
  res.end();
});

// now create the port and listen the server
const PORT = 3006;
server.listen(PORT, () => {
  console.log(`Running the server in the address http://localhost:${PORT}`);
});
