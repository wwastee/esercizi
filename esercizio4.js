const prompt = require('prompt-sync')();

let NumeroImput = prompt("Inserisci un numero e ti mostrerò un trucco di magia: ");

let somma = 0

for(let i=0; i <= NumeroImput; i++){
    somma=somma+i
    console.log(i + ": " + somma)
};

console.log(somma);