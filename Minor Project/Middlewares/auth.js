const jwt = require('jsonwebtoken')
require('dotenv').config()

function checkToken(req, res, next) {
    if (req.url == '/user/login') {
        next()
    }
    else {
        try {
            const decode = jwt.verify(req.headers.token,process.env.KEY)

            console.log(decode);
            
            next()
        }
        catch (err) {
            res.status(401).send("not valid user")
        }
    }
}

module.exports = checkToken