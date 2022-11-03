const prompt = require("prompt-sync")();

let str1 = prompt("Inserisci stringa 1: ");

let str2 = "pale#";
//stampa le due stringhe
console.log(str1);
console.log(str2);
//comparo se le due stringhe sono uguali
if (str1 === str2) {
  console.log("Stringhe uguali");
} else {
  console.log("Sono diverse");
}
//rimpiazzo @ con 'chiocciola'
let result = str1.replace("@", "chiocciola");
console.log("Risultato " + result);

function random(){

    return(Math.round(Math.random()*5))
};
console.log(str2[random()]);
