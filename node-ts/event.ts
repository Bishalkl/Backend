import { EventEmitter } from "events";

// Define the structure of the event data
interface EmitProps {
  id: number;
  url: string;
}

class Logger extends EventEmitter {
  constructor(private id: number, private url: string) {
    super(); // Call the parent constructor
  }

  // Method to log a message and emit an event
  logMessage(message: string): void {
    const logData: EmitProps = {
      id: this.id,
      url: this.url,
    };
    console.log(message);
    this.emit("messageLogged", logData); // Emit the event with the log data
  }

  // Register listener for the 'messageLogged' event
  onMessageLogged(listener: (data: EmitProps) => void): void {
    this.on("messageLogged", listener);
  }
}

// Create an instance of Logger with specific id and url
const logger = new Logger(1, "https://");

// Register a listener for the 'messageLogged' event
logger.onMessageLogged((data) => {
  console.log(`${data.url} (ID: ${data.id}) are logging!`);
});

// Log a message and emit the 'messageLogged' event
logger.logMessage("Logging event");
