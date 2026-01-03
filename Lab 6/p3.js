const fs = require('fs')

fs.writeFile("output.txt","successfully write in output.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully");
        
    }
})