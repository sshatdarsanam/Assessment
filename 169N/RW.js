const fs = require("fs");
const util = require('util');


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function writefile() {
    try {
        const result = await writeFile("./test1.txt", "hello-world","utf-8")
       
    } catch (err) {
        console.log(err)
    }

}
async function readfile() {
    try {
        const result = await readFile('test1.txt'); 
        console.log(result.toString())
    } catch (err) {
        console.log(err)
    }
}
writefile()
readfile()
