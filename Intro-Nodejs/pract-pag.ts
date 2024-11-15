import * as http from "http";

const PORT: number = 3002;

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse): void => {
    console.log(req.url, req.method, req.headers);
    res.setHeader("Content-Type", "text/html");

    const sendResponse = (title: string, message: string): void => {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write(`<head><title>${title}</title></head>`);
      res.write(`<body><h1>${message}</h1></body>`);
      res.end();
    };

    switch (req.url?.toLocaleLowerCase()) {
      case "/":
        res.write("<html>");
        res.write("<head><title>First-practise-node</title></head>");
        res.write("<body>");
        res.write("<nav>");
        res.write("<a href='/home'>Home</a> | ");
        res.write("<a href='/men'>Men</a> | ");
        res.write("<a href='/women'>Women</a> | ");
        res.write("<a href='/kids'>Kids</a> | ");
        res.write("<a href='/cart'>Cart</a>");
        res.write("</nav>");

        res.write("</body>");
        res.write("</html>");
        res.end();
        break;
      case "/home":
        sendResponse("Home", "Welcome to Home");
        break;
      case "/men":
        sendResponse("Men", "Welcome to Men");
        break;
      case "/women":
        sendResponse("Women", "Welcome to Women");
        break;
      case "/kids":
        sendResponse("Kids", "Welcome to Kids");
        break;
      case "/cart":
        sendResponse("Cart", "Welcome to cart");
        break;
      default:
        res.statusCode = 404;
        sendResponse("404 - Not Found", "404 - Page Not Found");
    }
  }
);

server.listen(PORT, (): void => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
