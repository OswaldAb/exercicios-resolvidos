
/*
Faça um Programa que converta metros para centímetros.
*/

const readline = require('readline-sync')

let metros = readline.questionFloat('Informe o comprimento em metros: ')

let centimetros = metros * 100

console.log(`${metros}m convertido para centimetros é ${centimetros}cm`)
