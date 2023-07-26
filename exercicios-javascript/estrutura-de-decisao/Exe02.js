
/*
Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
*/

const readline = require('readline-sync')

let num=0

num = readline.questionInt("\nInforme um numero: ")

if(num < 0){
  console.log('O numero é negativo');
}
else{
  console.log('O numero é positivo');
}
