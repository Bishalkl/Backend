import * as os from "os";

var totalMemory: number = os.totalmem();
var freeMemory: number = os.freemem();
console.log(`Total Memory is ${totalMemory} and freeMemory is ${freeMemory}`);
