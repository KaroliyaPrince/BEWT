const fs = require('fs')

fs.copyFile('Add.png','copyImage.png',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully copied");
    }
})