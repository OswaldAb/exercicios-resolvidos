
const readline = require("readline-sync")

/*
Faça um Programa que peça dois números e imprima o maior deles.
*/

let num1=0, num2=0, maior=0;

num1 = readline.questionInt("Informe um numero: ")
num2 = readline.questionInt("Informe outro numero: ")

maior = num1

if(maior < num2){
  maior = num2
}

console.log(`O maior numero é ${maior}`);
