import { promises as fsPromises } from "fs";
import * as path from "path";
import * as http from "http";

// Define paths for input and output files
const inputFile: string = path.join(__dirname, "inputs.txt");
const outputFile: string = path.join(__dirname, "outputs.txt");

// Function to check if a file exists
const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch {
    return false;
  }
};

// Function to read input file, transform to uppercase, and save to output file
const transformFile = async (): Promise<void> => {
  try {
    // Check if the input file exists
    const inputExists = await fileExists(inputFile);
    if (!inputExists) {
      throw new Error(`Input file ${inputFile} is not found`);
    }

    // Read the file and transform content to uppercase
    const data: string = await fsPromises.readFile(inputFile, "utf8");
    const transformData: string = data.toUpperCase();

    // Write transformed data to the output file
    await fsPromises.writeFile(outputFile, transformData, "utf8");

    console.log(`Data has been copied to ${outputFile}`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error occurred: ${err?.message}`);
    } else {
      console.error("An unexpected error occurred");
    }
  }
};

// Function to handle incoming HTTP requests
const handleRequest = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
): Promise<void> => {
  if (req.url === "/output") {
    try {
      // Check if the output file exists
      const outputExists = await fileExists(outputFile);
      if (!outputExists) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Output file not found");
        return;
      }

      // Read and send the contents of the output file
      const data: string = await fsPromises.readFile(outputFile, "utf8");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error occurred: ${err?.message}`);
      } else {
        console.error("An unexpected error occurred");
      }
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("File not found");
  }
};

// Function to start the server
const listenServer = async (): Promise<void> => {
  try {
    const server = http.createServer(handleRequest);
    server.listen(3000, () => {
      console.log("Server running at http://localhost:3000/output");
    });

    await transformFile();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error occurred: ${err?.message}`);
    } else {
      console.error("An unexpected error occurred");
    }
  }
};

// Start the server
listenServer();
