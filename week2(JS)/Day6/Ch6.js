//const fs = require('fs').promises;
const fs =require('fs');
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
      fs.readFile(filePath,"utf8",(err,data) => {
          if (err) {
              reject(`Error reading file: ${err.message}`);
          } else {
              resolve(data);
          }
      });
  });
}
function writeFileAsync(filePath, content) {
  return new Promise((resolve, reject) => {
      fs.writeFile(filePath, content,(err) => {
            if (err) {
                reject(`Error writing to file: ${err.message}`);
            } else {
                resolve();
            }
        });
    });
}
//async function readFile(filePath) {
//    const content = await fs.readFile(filePath, 'utf-8');
 //   console.log("the content :",content);
//}
//async function writefile(filePath,content){
  //  console.log("hello");
    //await fs.writeFile(filePath, content,'utf-8');
//}
module.exports = {
  readFileAsync,
  writeFileAsync
};