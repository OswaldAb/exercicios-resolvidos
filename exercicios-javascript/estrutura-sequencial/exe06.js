
/*
Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
*/

// area = pi * raio^2

const readline = require('readline-sync') // importando biblioteca readline-sync link: https://www.npmjs.com/package/readline-sync

const math = require('mathjs') // importando biblioteca matematica link: https://mathjs.org


let raio = readline.questionFloat('Informe o raio do circulo: ')

let area = math.pi * math.pow(raio, 2)

console.log(`A area do circulo eh ${area.toFixed(2)}`)
