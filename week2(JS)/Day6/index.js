const { readFileAsync,writeFileAsync} = require('./Ch6.js');
async function processFile() {
    try {
    const file = './text.txt';
    let content = await readFileAsync(file);
    console.log(content);
    content = content.toUpperCase();
    content = `${new Date().toDateString()} : ${content}`;
    content = content.split(' ').reverse().join(' ');
    const newFile = file.replace(".txt","_modified.txt");
    await writeFileAsync(newFile,content);
    console.log("file saved successfuly ");
    } catch (error) {
        console.log(error);
    }
}
processFile();