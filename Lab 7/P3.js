const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('home.txt', (err, data) => {
            if (err) {
                res.end(err)
            }

            res.end(data)
        })
    }

    else if(req.url === '/contact'){
        fs.readFile('contact.txt', (err, data) => {
            if (err) {
                res.end(err)
            }

            res.end(data)
        })
    }
    else{
        res.end("Page Not Found")
    }
})

server.listen(3000, () => {
    console.log("Server start at 3000 port");
})