import { createServer, IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";
import { User } from "./types";

const PORT = 3000;
const DATA_FILE = path.join(__dirname, "users.json");

// Helper function to read and parse the JSON file
function readDataFromFile(): User[] {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write data to the JSON file
function writeDataToFile(data: User[]): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

// Handle incoming requests
function requestHandler(req: IncomingMessage, res: ServerResponse) {
  if (req.method === "POST" && req.url === "/user") {
    let body = "";

    // Collect data from the request
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // When the request is finished
    req.on("end", () => {
      try {
        const newUser: User = JSON.parse(body);
        const users = readDataFromFile();

        // Assign a new ID
        newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        users.push(newUser);

        writeDataToFile(users);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User added", user: newUser }));
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid JSON" }));
      }
    });
  } else if (req.method === "GET" && req.url === "/users") {
    const users = readDataFromFile();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found" }));
  }
}

// Create the HTTP server
const server = createServer(requestHandler);

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
