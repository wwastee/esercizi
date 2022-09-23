const prompt = require('prompt-sync')();

function divisib(num, divisore){
    if(num % divisore == 0){
        return true
    }else{
        return false
    }
};

let num1 = parseInt(prompt());

let contat = 0;

for(let i = 1; i <= num1 ; i++){
    if(divisib(num1, i) == true){
        contat++;
        if(contat > 2){
            console.log("non primo");
        }else{
            console.log("primo");
        };
    };
};

console.log(contat);
