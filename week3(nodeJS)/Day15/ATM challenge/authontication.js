const {readUsersFile,saveData,saveTransaction} = require('./fileOperation.js');
const EventEmitter = require('events');
const event = new EventEmitter();
const readline = require('readline');

const rl = readline.createInterface({input:process.stdin,output:process.stdout});
const prompt = (question)=>{
    return new Promise((resolve,reject) => {
        rl.question(question,(answer)=>{
            resolve(answer);
        })
    })
}
 
event.on('checkBalance',(user)=>{
    try {
        const {balance} = user;
        console.log(`Your Actual Balance Is ${balance}`);
        atmProccess(user);
    } catch (error) {
        console.log(error);
    }
})

event.on('deposit',async (user)=>{
    try {
        
        const amount = parseInt(await prompt('Please Enter Your Deposit Amount : '));
        const type = 'deposit';
        const date = new Date().toString();
        const transaction = {type,amount,date};
        const users = await readUsersFile('./users.json');
        users.forEach(u => {
            if (u.accountID===user.accountID) {
                u.balance += amount;
                u.transactions.push(transaction);
            }
        });
        saveTransaction(users,'./users.json');
   
        console.log('Deposit Transaction Was Successful !');
        atmProccess(user);
    } catch (error) {
        console.log(error);
    }
})

event.on('withdraw',async (user)=>{
    try{
    const amount = parseInt(await prompt('Please Enter Your Withdraw Amount : '));
    const type = 'withdraw';
    const date = new Date().toString();
    const transaction = {type,amount,date};
    const users = await readUsersFile('./users.json');
    users.forEach(u => {
        if (u.accountID===user.accountID) {
            if (u.balance>=amount) {
                u.balance -= amount;
                u.transactions.push(transaction);
                saveTransaction(users,'./users.json');
                console.log('Whitdraw Transaction Was Successful !');
            }else{
                console.log('Your Balance Is Not Enough For This Transaction !!');
            }
            
        }
    });

    atmProccess(user);
} catch (error) {
    console.log(error);
}
})

event.on('transactionHis',(user)=>{
    try {
        console.log(user.transactions);
        atmProccess(user);
    } catch (error) {
        console.log(error);
    }
})

event.on('menu',()=>{
    console.log('\t\t----Welcome To ATM System Management----\n\n1-Check Your Balance.\n2-Deposit Money.\n3-Withdraw Money.\n4-View Transactions History.\n5-Logout.\n');
})

const addNewUser =async ()=>{
    try {
        let newUser = [];
        let accountID;
        const generateID = () =>{
            let acc = Math.floor(Math.random()*1003);
            const accountID = `ACC${acc}`;
            return accountID;
        }
        accountID = generateID();
       
        let name = await prompt('Please Enter Your Name : ');
        let pin = await prompt('Please Enter Your PIN : ');
        while(pin < 1000 || pin > 9999) {
            pin = await prompt('Please Try Again With 4-Digits PIN : ');
        }
        let balance = parseInt(await prompt('Please Enter Your Blance : '));
    
        newUser = {accountID,name,pin,balance,transactions:[]};
        console.log('User Added Successfuly.');
        console.log(newUser);
        saveData(newUser,'./users.json');
        main();
    } catch (error) {
        throw new Error(error);
    }
}

const login = async ()=>{
    try {
        console.log('\t\tLOGIN :');
        const accountID = await prompt('Enter Your Account ID :');
        const pin = await prompt('Enter Your PIN :');
        const usersData = await readUsersFile('./users.json');
        const foundUser = usersData.find((u)=>u.accountID===accountID && u.pin===pin)
        if (foundUser) {
            console.log('Login Successfuly. Your Account Information : ');
            console.log(foundUser);
            atmProccess(foundUser);
        }else{
            console.log('Account ID Or PIN Incorect !!');
            login();
        }
    } catch (error) {
        console.log(error);
    }
}

async function main() {
    console.log('1-choose 1 to add new user .\n2-choose 2 to exit.\n3-choose 3 to display.\n4-Login.');
    let check = true;
    while (check) {
        let choose = await prompt('please choose somthing : ');
        switch (choose) {
            case '1':
                addNewUser();
                break;
            case '2':
                check=false;
                rl.close();
                break;
            case '4':
              login();
                break;
            default:
                console.log('your choice is wrong !!');
                break;
        }
    }
}

const atmProccess = async (user)=>{
    
    event.emit('menu');
    let check = true;
    while (check) {
        const choose = await prompt('Please choose your operation by number : ');
        switch (choose) {
            case '1':
            event.emit('checkBalance',(user));
            break;
            case '2':
                event.emit('deposit',(user));
            break;
            case '3':
                event.emit('withdraw',(user));
            break;
            case '4':
                event.emit('transactionHis',(user));
            break;
            case '5':
                check=false;
                main();
            break;
            default:
                console.log('Your Choice Is Wrong !!');
            break;
        }
    }
}

main();








