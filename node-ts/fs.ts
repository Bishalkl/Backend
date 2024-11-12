import * as fs from "fs";

// const files = fs.readdirSync('./');
// console.log(files)

fs.readdir(
  "./",
  (err: NodeJS.ErrnoException | null, files: string[] | undefined) => {
    if (err) console.log("Error", err);
    else console.log("Result", files);
  }
);
