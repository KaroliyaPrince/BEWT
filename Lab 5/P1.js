const child_process = require('child_process');
const { log } = require('console');


// child_process.exec('node --version',(err,stdout,stderr)=>{
//     if(err){
//         console.log("err : ",err);
//         return;
//     }

//     if(stdout){
//         console.log("Output = ",stdout);
//         return
//     }
//     if(stderr){
//         console.log("StdErr = ",stderr);
//         return
        
//     }
// })

child_process.exec('python Python.py',(err,stdout,stderr)=>{
    if(err){
        console.log("Err = ",err);
        return;
    }
    if(stderr){
        console.log("StdErr = ",stderr);
        return;
    }

    console.log("Output = ",stdout);
    
})