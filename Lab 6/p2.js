const fs = require('fs')

try{
    data = fs.readFileSync("info.txt")
    console.log(data.toString());
}
catch(err){
    console.log(err);
    
}