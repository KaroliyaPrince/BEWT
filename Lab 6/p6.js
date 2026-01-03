const fs = require("fs")

fs.mkdir('my-data',(err)=>{
    if(err){
        if(err.code === "EEXIST"){
            console.log("Folder alredy exist");
        }
        else{
            console.log(err);
        }
    }

    else{
        console.log("Successfully");
        
    }
})