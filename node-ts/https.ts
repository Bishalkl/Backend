import * as http from "http";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse): void => {
    if (req.url === "/") {
      res.write("Hello world");
      res.end();
    }

    if (req.url === "/api/courses") {
      res.write(JSON.stringify([1, 2, 3, 4, 5]));
      res.end();
    }
  }
);

//Make the server listen on port 3000
server.listen(3000, (): void => {
  console.log("Listening on port 3000...");
});
