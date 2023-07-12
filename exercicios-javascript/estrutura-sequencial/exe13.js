
/*
Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7
*/

const readline = require('readline-sync')

const altura = readline.questionFloat('\nInforme a sua altura: ')

let peso_ideal_homem = (72.7 * altura) - 58
let peso_ideal_mulher = (62.1 * altura) - 44.7

console.log(`Em relacao a altura informada o peso ideal seria`)
console.log(`Se for homem: ${peso_ideal_homem.toFixed(2)} Kg`)
console.log(`Se for mulher: ${peso_ideal_mulher.toFixed(2)} Kg`)
