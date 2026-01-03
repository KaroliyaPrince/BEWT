const EventEmitter = require('events')

const event = new EventEmitter()

event.on('greet',(name)=>{
    console.log("Hello ,",name);
})

setInterval(()=>{
    event.emit('greet','Prince')
},1000)