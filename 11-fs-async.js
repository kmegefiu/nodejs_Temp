//A set of functions you want to include in your application.
//Node modules provide a way to re-use code in your Node application
const file = require('fs');

file.readFile('./content/first.txt','utf8',(err,result)=>{
if(err){
    console.log(err);
    return;
}
const first = result;
file.writeFile('./content/writeAync.txt',`This is just the result ${first}`,{flag: 'a'},(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
});
});
//const second = file.readFileSync('./content/second.txt','utf8');

//file.writeFile('./content/writeAync.txt','This is just a test');

//console.log(first);
//console.log(second)

