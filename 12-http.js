const http = require('http');

// Runs the Website
// it only runs on whatever page you start the run on first because it uses res.end it ends it even if you try to go to another page.
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(
        `
        <h1>Oops</h1>
        <p>We can't seem to find the page your looking for</p>
        <a href="/">back home</a>
        `
    )
})

server.listen(5000)


// Version 1
/*
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === './about'){
        
    }
    console.log(req)
    res.write('Welcome to our home page');
    res.end()
})

server.listen(5000)
*/
