const fs = require("fs");
const util = require('util');
const crypto = require("crypto"); 

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function writefile() {
    try {
        const result = await writeFile("./output.txt", "hello-world","utf-8")
       
    } catch (err) {
        console.log(err)
    }

}
async function readfile() {
    try {
        const result = await readFile('output.txt'); 
        let hash = crypto.createHash('sha256').update(result).digest('base64');
        console.log(result.toString(), hash)
      await writeFile("./output.txt", hash)

    } catch (err) {
        console.log(err)
    }
}
writefile()
readfile()









