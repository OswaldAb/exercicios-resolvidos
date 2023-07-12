
/*
Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
*/

const readline = require('readline-sync')

let temperatura_celsius = readline.questionFloat('\nInforme a temperatura em graus Celsius: ')

let temperatura_fahrenheit = (temperatura_celsius * 9/5) + 32

console.log(`A temperatura convertida para fahrenheit é ${temperatura_fahrenheit.toFixed(2)}°F`);
