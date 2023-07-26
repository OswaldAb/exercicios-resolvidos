
/*
Faça um Programa que leia três números e mostre o maior e o menor deles.
*/

const readline = require('readline-sync')

let num1=0, num2=0, num3=0, maior=0, menor=0;

num1 = readline.questionInt('\nInforme o primeiro numero: ')
num2 = readline.questionInt('Informe o segundo numero: ')
num3 = readline.questionInt('Informe o terceiro numero: ')

menor = num1
if(num2 < menor){
  menor = num2
}
if(num3 < menor){
  menor = num3
}

maior = num1
if(num2 > maior){
  maior = num2
}
if(num3 > maior){
  maior = num3
}

console.log(`\nO menor numero eh ${menor}`);
console.log(`E o maior numero eh ${maior}`);
