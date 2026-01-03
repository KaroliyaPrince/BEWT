const fs = require('fs')

fs.readFile('main.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
        
    }
})