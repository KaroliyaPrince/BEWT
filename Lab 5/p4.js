url = "https://www.demo.com?name:prince&age:19"
const urlObj = new URL(url)

urlObj.searchParams.forEach((value,key)=>{
    console.log(key);
    console.log(value);
})

console.log(urlObj.protocol);
console.log(urlObj.hostname);
console.log(urlObj.pathname);


