import * as fs from "fs";
fs.writeFile(
  "Output.txt",
  "writing file",
  (err: NodeJS.ErrnoException | null) => {
    if (err) console.log("Error occurred");
    else console.log("File Written Successfully");
  }
);
