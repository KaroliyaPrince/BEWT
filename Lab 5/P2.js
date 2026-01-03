const child_process = require('child_process')

const cp=child_process.spawn('cmd.exe',["/C","dir","/s","C:\\"])

cp.stderr.on('data',(data)=>{
    console.log(`err = ${data}`);
})
cp.stdout.on('data',(data)=>{
    console.log(`data = ${data}`);
})
cp.on('close',(data)=>{
    console.log(`close = ${data}`);
})