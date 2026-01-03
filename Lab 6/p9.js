const fs = require("fs")
const { exit } = require("process")

try{
    exist = fs.existsSync('info.txt')

    if(exist){
        console.log("File Exist");
    }
    else{
        console.log("File not exist");
    }
}
catch(err){
    console.log(err);
}