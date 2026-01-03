const { log } = require('console')
const fs = require('fs')

fs.watch('.',(event,type)=>{
    console.log("Event = "+event+" & type = "+type)
})