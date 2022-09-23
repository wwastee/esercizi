const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('inserisci un numero, cretino: '));

let risultato = 0;

function tabellina(X) {
    for(let i = 1; i <= 10; i++) {
        risultato = i * X;
        console.log(risultato);
    };
};

for(let i = 1; i <= num1; i++){
    tabellina(i);
};