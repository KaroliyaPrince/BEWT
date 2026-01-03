url = "https://www.demo.com"

const urlObj = new URL(url)

urlObj.searchParams.append('name','prince')
urlObj.searchParams.append('age','19')

console.log(urlObj.toString());
