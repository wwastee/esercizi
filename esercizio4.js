const prompt = require('prompt-sync')();

let NumeroImput = prompt("Inserisci un numero e ti mostrerĂ² un trucco di magia: ");

let somma = 0

for(let i=0; i <= NumeroImput; i++){
    somma=somma + i
    console.log(i + ": " + somma)
};

console.log(somma);


let moltiplicazione = 1

for(let i=1; i <= NumeroImput; i++){
    moltiplicazione=moltiplicazione * i
    console.log(i + ": " + moltiplicazione)
};

console.log(moltiplicazione);

console.log("TA DAN ma vai a fanculo");