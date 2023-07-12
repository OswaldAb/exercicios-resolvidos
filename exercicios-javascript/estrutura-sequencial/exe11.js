
/*
Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo.
*/

const readline = require('readline-sync')
const math = require('mathjs')

let num1 = readline.questionInt('\nInforme um numero inteiro: ')
let num2 = readline.questionInt('Informe outro numero inteiro: ')
let num3 = readline.questionFloat('Informe um numero real: ')

let resposta_1 = (num1 * 2) * (num2 / 2)
let resposta_2 = (num1 * 3) + num3
let resposta_3 = math.pow(num3, 3)

console.log(`\nO produto do dobro do primeiro com metade do segundo é ${resposta_1}`)
console.log(`A soma do triplo do primeiro com o terceiro é ${resposta_2}`);
console.log(`O terceiro elevado ao cubo é ${resposta_3}`);
