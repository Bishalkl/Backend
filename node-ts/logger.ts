console.log(__filename);
console.log(__dirname)

const url: string = "http://mylogger.io/log";

const log = (message?: string): void => {
  // send an HTTP request
  console.log(message);
};

export { log };
