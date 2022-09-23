const prompt = require('prompt-sync')();

let NumeroImput = prompt("inserisci un numero e ti faccio vedere le tabelline cretino ");

let tabellina = 0

for(let i=0; i <= NumeroImput; i++){
    tabellina=tabellina + i
    console.log(i + ": " + tabellina)
};