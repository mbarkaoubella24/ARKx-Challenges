const fs = require('fs');

const readUsersFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject('Error occurred while reading file: ' + err);
                return;
            }
            try {
                const users = JSON.parse(data || '[]');
                resolve(users);
            } catch (error) {
                reject('Error while parsing data: ' + error);
            }
        });
    });
}

const saveData = async (data,filePath) => {
    try {
        const users = await readUsersFile(filePath);
        users.push(data);
        let usersJson = JSON.stringify(users, null, 2);
        fs.unlink(filePath, (err) => {
            if (err) console.log('Error deleting file: ' + err); 
        });
        fs.writeFile('./users.json', usersJson, (err) => {
            if (err) {
                console.log('Error writing file: ' + err);
                return; 
            }
        });
    } catch (error) {
        console.log(error); 
    }
}

const saveTransaction = async (data,filePath) => {
    try {
        let transaction = JSON.stringify(data, null, 2);
        fs.unlink(filePath, (err) => {
            if (err) console.log('Error deleting file: ' + err); 
        });
        fs.writeFile(filePath, transaction, (err) => {
            if (err) {
                console.log('Error writing file: ' + err);
                return; 
            }
        });
    } catch (error) {
        console.log(error); 
    }
}

module.exports = { readUsersFile, saveData ,saveTransaction};



