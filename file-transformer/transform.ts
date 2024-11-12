import { promises as fsPromises } from "fs";
import * as path from "path";
import * as http from "http";

// Define the file paths
const inputFilePath: string = path.join(__dirname, "input.txt");
const outputFilePath: string = path.join(__dirname, "output.txt");

// Function to check if a file exists
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fsPromises.access(filePath);
    return true; // File exists
  } catch {
    return false; // File does not exist
  }
}

// Function to transform the file (reading, transforming, and writing)
async function transformFile(): Promise<void> {
  try {
    // Check if the input file exists
    const inputExists = await fileExists(inputFilePath);
    if (!inputExists) {
      throw new Error(`Input file ${inputFilePath} not found.`);
    }

    // Read from the input file
    const data: string = await fsPromises.readFile(inputFilePath, "utf8");

    // Transform the text to uppercase
    const transformedData: string = data.toUpperCase();

    // Write the transformed text to the output file
    await fsPromises.writeFile(outputFilePath, transformedData);

    console.log(`Data transformed and saved to ${outputFilePath}`);
  } catch (err) {
    console.error(`Error occurred: ${err}`);
  }
}

// Function to handle HTTP requests
async function handleRequest(
  req: http.IncomingMessage,
  res: http.ServerResponse
): Promise<void> {
  if (req.url === "/output") {
    try {
      // Check if the output file exists
      const outputExists = await fileExists(outputFilePath);
      if (!outputExists) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Output file not found.");
        return;
      }

      // Read the output file and send the data in the response
      const data: string = await fsPromises.readFile(outputFilePath, "utf8");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading output file");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
}

// Create the HTTP server
const server = http.createServer(handleRequest);

// Start the server on port 3000
server.listen(3001, (): void => {
  console.log("Server running at http://localhost:3000/output");

  // Call the transformFile function to ensure input file is processed
  transformFile();
});
