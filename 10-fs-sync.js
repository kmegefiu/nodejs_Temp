//A set of functions you want to include in your application.
//Node modules provide a way to re-use code in your Node application
const file = require('fs');

const first = file.readFileSync('./content/first.txt','utf8');
const second = file.readFileSync('./content/second.txt','utf8');

file.writeFileSync('./content/write.txt','\nThis is just a test', {flag:'a'});

// console.log(first);
// console.log(second)