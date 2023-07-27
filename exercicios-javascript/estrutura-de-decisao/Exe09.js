/*
Faça um Programa que leia três números e mostre-os em ordem decrescente.
*/

const readline = require('readline-sync')
let num1=0,num2=0,num3=0,min=0,max=0,med=0;

num1 = readline.questionInt('\nNumero 1: ')
num2 = readline.questionInt('Numero 2: ')
num3 = readline.questionInt('Numero 3: ')

min = num1
if(num2 < min && num2 < num3){
  min = num2
}
else if(num3 < min && num3 < num2){
  min = num3
}

med = num1
if(num2 < min && num2 < num3){
  med = num2
}
else if(num3 < min && num3 < num2){
  med = num3
}

max = num1
if(num2 < min && num2 < num3){
  max = num2
}
else if(num3 < min && num3 < num2){
  max = num3
}

console.log(`\nMenor: ${min}`);
console.log(`\nMedio: ${med}`);
console.log(`\nMaior: ${max}`);
