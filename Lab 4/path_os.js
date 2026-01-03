const path = require('path')
const os = require('os')

// console.log(__dirname);
// console.log(__filename);
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));


// console.log(path.join("users", "arjun", "documents", "project"));
// console.log(path.normalize("//folder//subfolder////file.txt"));

// console.log(path.isAbsolute("//folder//subfolder////file.txt"));
// console.log(path.isAbsolute("./folder//subfolder////file.txt"));

// console.log(path.resolve("folder", "subfolder", "app.js"));

// console.log(os.type());
// console.log(os.release());
// console.log(os.version());
// console.log(os.platform());
// console.log(os.arch());

// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.freemem()/(1024*1024*1024));


// console.log(os.userInfo());

// console.log(os.uptime()/3600);

console.log(os.cpus());

os.cpus().map((cor)=>{
    console.log(cor.model);
    
})


// console.log(os.networkInterfaces());













