const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const contacts=[];
//////////
function prompt(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (userInput) => {
            resolve(userInput);
        });
    });
}
//////////
async function main(){
    rl.question(' 1. Ajouter contact \n 2. Voir les contacts \n 3. Chercher dans les contacts \n 4. Sortir \n', async (choose)=>{
        switch(choose){
            case '1':
                 const name = await prompt('Entrer votre nom: ');
                 const phone = await prompt('Entrer votre numero de telephone: ');
                 const contact ={name, phone}
                 contacts.push(contact);
                 console.log (contact);
                 main();
                 break;
            case '2':
                if(contacts.length==0){
                    console.log("Aucun contact n'est enregistre!");
                    main();
                }
                else{
                    console.log(contacts);  
                    main();
                }
                 break;
            case '3':
                 const nameSearch = await prompt('Entrer votre nom: ');
                 const tab = contacts.filter((contact) => contact.name === nameSearch);
                if (tab.length == 0) {
                   console.log("Ce contact n'existe pas!");
                   main();
                } else {
                    console.log("Contacts trouvees :");
                    console.log(tab); 
                }
                   main();
                break;
            case '4':
                rl.close();
                break;
            default:
                    console.log("Choix invalide, veuillez réessayer.");
                    main();
                    break;
          }
    })
}
main();



  
