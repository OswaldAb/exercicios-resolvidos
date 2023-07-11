
/*
Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).
*/

const readline = require('readline-sync')

let temperatura_fahrenheit = readline.questionFloat('Informe a temperatura em fahrenheit: ')

let temperatura_celsius = 5 * ((temperatura_fahrenheit-32) / 9)

console.log(`A temperatura convertida para celsius é ${temperatura_celsius.toFixed(2)}°C`);
