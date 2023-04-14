//os module provide many useful properties and method for interacting the operating system
//as well as the server
//require() = import
const os = require('os')

// info about current user
const user = os.userInfo();

//method returns the system uptime in seconds
console.log((os.uptime())/60)

//object
const currentOS = {name:os.release(),
                   release:os.release(),
                    totalMem: os.totalmem(),
                   freeMem: os.freemem()}

console.log(currentOS);
