const prompt = require('prompt-sync')();

let primoNumero = prompt("BENVENUTO ALLA CALCOLATRIECE PAZZA SGRAVATA MAGGICA, INSERISCI UN NUMERO ");

let operatore = prompt("ORA INSERISCI UN OPERATORE O TI SCANNO ");

let secondoNumero = prompt("ORA INSERISCI IL SECONDO NUMERO MANIGOLDO MASCALZONE ");

primoNumero = parseInt(primoNumero);
secondoNumero = parseInt(secondoNumero);

if(operatore == "+"){
    let numeroFinale = (primoNumero + secondoNumero)
    console.log(numeroFinale);
};

if(operatore == "x" || "*"){
    let numeroFinale = (primoNumero * secondoNumero)
    console.log(numeroFinale);
};

if(operatore == "/"){
    let numeroFinale = (primoNumero / secondoNumero)
    console.log(numeroFinale);
};

if(operatore == "-"){
    let numeroFinale = (primoNumero - secondoNumero)
    console.log(numeroFinale);
};

console.log("HAI CONSIDERATO IL SUICIDIO?")
