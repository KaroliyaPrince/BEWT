const fs = require("fs")

fs.copyFile('source.txt','backup.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully copied");
    }
})