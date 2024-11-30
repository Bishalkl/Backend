// importing modules
const fs = require("fs");

// creating the function for request handle
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);

  // best on url
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Learning Node</title></head>");
    res.write("<body>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<label for="name">Name:</label>');
    res.write('<input type="text" id="name" name="name" required><br><br>');
    res.write('<label for="gender">Gender:</label><br>');
    res.write(
      '<input type="radio" id="male" name="gender" value="male" required>'
    );
    res.write('<label for="male">Male</label><br>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female" required>'
    );
    res.write('<label for="female">Female</label><br>');
    res.write(
      '<input type="radio" id="other" name="gender" value="other" required>'
    );
    res.write('<label for="other">Other</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); // this is for end the respone and send it
  } else if (
    req.url.toLocaleLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    // creating the array for collect the data
    const body = [];
    // while coming data by using chunks and on emitter
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // after coming data
    req.on("end", () => {
      // it is encoded data
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
      // now have to decode tha data us by URLSearchParams
      const params = new URLSearchParams(fullbody);

      //   const bodyObject = {};
      //   classic way
      //   for(const [key, val] of params.entries()) {
      //     bodyObject[key] = val;
      //   }
      // standard way
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      const stringFormat = JSON.stringify(bodyObject);
      console.log(stringFormat);
      fs.writeFileSync("user.txt", stringFormat);
    });

    res.statusCode = 302; //redirecting request code
    res.setHeader("Location", "/"); //redirecting the url
    // return res.end(); // this is for end the respone and send it
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Learning node</title></head>");
  res.write("<body><h1>Hi, My name is Bishal koirala.</h1></body>");
  res.write("</html>");
  res.end(); // this is for end the respone and send it
};

// to export 
module.exports = userRequestHandler;