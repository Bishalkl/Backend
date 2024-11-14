// creating a first server
import * as http from "http";
const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse): void => {
    console.log(req);
  }
);
const PORT: number = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
