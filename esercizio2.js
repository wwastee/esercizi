const prompt = require('prompt-sync')();

let nome = prompt("inserici il tuo nome: ");
let età = prompt("inserisci quanti anni hai: ");

console.log("ti chiami " + nome + " e hai " + età + " anni");

if(età < 18){
    console.log("vai a fanculo non puoi votare")
} else {
    console.log("okay vai alla cabina N^ 8 idiota")
}