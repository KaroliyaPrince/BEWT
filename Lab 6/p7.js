const fs = require('fs')

fs.readdir('.','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        data.map((data)=>{
            console.log(data);
        })
    }

})