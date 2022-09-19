const prompt = require('prompt-sync')();

let numeroImput = prompt("Inserisci un numero e ti mostrerò un trucco di magia: ");

let somma = 0

for(let i=0; i <= numeroImput; i++){
    if(i % 3 == 0 && i % 7 ==0){     //punto bonus
        somma=somma + i
        console.log(i + ": " + somma)
    };
};

console.log(somma);
