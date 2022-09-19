const prompt = require('prompt-sync')();

let username = prompt("inserisci il tuo username: ");
let password = prompt("inserisci la tua password: ");
let usernameCorretto = ("Pino");
let passwordCorretta = ("Culo");
if(username != usernameCorretto){
    console.log("username errato")
}else{
    console.log("username corretto")
};

if(password != passwordCorretta){
    console.log("password errata")
}else{
    console.log("password corretta")
};

   

