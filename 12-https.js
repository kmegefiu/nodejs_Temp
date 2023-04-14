const http = require('http');
const server = http.createServer((req, res)=>{
 
    if(req.url==='/'){
        res.end('Welcome to our home page!!')
    }
    if(req.url==='/about'){
        res.end('Here is the history of Kendy Megene')
    }

    else{
    res.end(`
    <h1>Wrong request</h1>
    <p>The page you are looking for do not exist</p>
    <a href="/">back to hope page</a>
    `) 
    }

})

process.on('uncaughtException', function (err) {
    console.log(err);
}); 
server.listen(5000);


