// creating a first server
import * as http from "http";
import * as fs from "fs";
const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(req.url, req.method, req.headers);
    // process.exit(); // Stops event loop

    if (req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Complete Coding</title></head>");
      res.write("<body><h1>Enter your details</h1>");
      res.write("<form action='/submit-details' method='POST'>");

      // Name input
      res.write("<label for='username'>Name:</label>");
      res.write(
        "<input type='text' id='username' name='username' placeholder='Enter your name'><br><br>"
      );

      // Gender radio buttons
      res.write("<label>Gender:</label><br>");
      res.write("<input type='radio' id='male' name='gender' value='male'>");
      res.write("<label for='male'>Male</label><br>");
      res.write(
        "<input type='radio' id='female' name='gender' value='female'>"
      );
      res.write("<label for='female'>Female</label><br>");

      // Submit button
      res.write("<br><input type='submit' value='Submit'>");

      res.write("</form>");
      res.write("</body>");
      res.write("</html>");
      return res.end();
    } else if (
      req.url?.toLowerCase() === "/submit-details" &&
      req.method == "POST"
    ) {
      fs.writeFileSync("user.txt", "Prashant Jani");
      res.statusCode = 302;
      res.setHeader("Location", "/");
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
