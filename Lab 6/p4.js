const fs = require("fs")

fs.appendFile("output.txt","hello, Append successfully",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully");
        
    }
    
})