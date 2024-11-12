// Import the required modules
import * as fs from "fs";
import * as path from "path";
import * as http from "http";

// Define ther file paths
const inputFilePath: string = path.join(__dirname, "input.txt");
const outputFilePath: string = path.join(__dirname, "output.txt");

//Read from the input file
fs.readFile(
  inputFilePath,
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string): void => {
    if (err) {
      console.log(`Error reading file: ${err}`);
      return;
    }

    // Trasform ther text to uppercase
    const transformedData: string = data.toUpperCase();

    // write the transformed text to the output file
    fs.writeFile(
      outputFilePath,
      transformedData,
      (err: NodeJS.ErrnoException | null): void => {
        if (err) {
          console.log(`Error writing to file: ${err}`);
          return;
        }
        console.log(`Data transformed and saved to ${outputFilePath}`);
      }
    );
  }
);

// create an HTTPserver to display the transformed text
const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse): void => {
    if (req.url === "/output") {
      // Read the transformed file and send it in the response
      fs.readFile(
        outputFilePath,
        "utf8",
        (err: NodeJS.ErrnoException | null, data: string): void => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading output file");
            return;
          }
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(data);
        }
      );
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  }
);

// Start the server on port 3000
server.listen(3000, (): void => {
  console.log("Server running at http://localhost:3000/output");
});
