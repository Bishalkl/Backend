// creating a first server
import * as http from "http";
const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(req.url, req.method, req.headers);
    // process.exit(); // Stops event loop

    if (req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Complete Coding</title></head>");
      res.write("<body><h1>Welcome to Home</h1> </body>");
      res.write("</html>");
      return res.end();
    } else if (req.url === "/product") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Complete Coding</title></head>");
      res.write("<body><h1>Check out prodcuts</h1> </body>");
      res.write("</html>");
      return res.end();
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Like / Share / Subscribe </h1> </body>");
    res.write("</html>");
    res.end();
  }
);
const PORT: number = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
