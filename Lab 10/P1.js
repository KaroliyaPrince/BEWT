const express = require("express")
const app = express()

const chackLoginmiddleware = (req, res, next) => {
    if (req.query.un === "prince" && req.query.pw === "123") {
        next()
    }
    else {
        res.status(401).send("Unauthorized")
    }
}

app.use(chackLoginmiddleware)

app.get('/home', (req, res) => {

    res.send("This is home page")

})

app.listen(3000, () => {
    console.log("Server start @3000 port number");

})