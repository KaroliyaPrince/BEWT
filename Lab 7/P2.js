const http = require('http')

const server = http.createServer((req,res)=>{
    
    res.setHeader('Content-Type','text/html')

    if(req.url === '/'){
        res.end("<h1>Home Page</h1>")
    }
    else if(req.url === '/contact'){
        res.end("<h1>Contact Page</h1>")
    }
    else if(req.url === '/Student_details'){
        res.end("Student details Page")
    }
    else if(req.url === '/profile'){
        res.end("Profile Page")
    }
    else if(req.url === '/service'){
        res.end("Service Page")
    }
    else{
        res.end("Page not found")
    }
})

server.listen(3000,()=>{
    console.log("Server start at 3000 port");
})