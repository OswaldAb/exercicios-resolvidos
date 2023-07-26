
/*
Faça um Programa que leia três números e mostre o maior deles.
*/

const readline = require('readline-sync')

let num1=0, num2=0, num3=0, maior=0;

num1 = readline.questionInt('\nInforme o primeiro numero: ')
num2 = readline.questionInt('Informe o segundo numero: ')
num3 = readline.questionInt('Informe o terceiro numero: ')

maior = num1
if(num2 > maior){
  maior = num2;
}
if(num3 > maior){
  maior = num3
}

console.log("\nO maior numero eh " + maior)
