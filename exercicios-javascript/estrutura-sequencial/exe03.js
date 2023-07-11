
/*
Faça um Programa que peça dois números e imprima a soma.
*/

const readline = require('readline-sync')

/*
Obs!

*question: Este é o método básico que solicita ao usuário uma entrada e retorna a resposta como uma string

* questionInt: Este método solicita ao usuário uma entrada e retorna a resposta como um número inteiro

* questionFloat: Este método solicita ao usuário uma entrada e retorna a resposta como um número de ponto flutuante (número decimal)
*/

let num1 = readline.questionFloat('Digite um numero: ')
let num2 = readline.questionFloat('Digite outro numero: ')

let soma = num1 + num2

console.log(`A soma de ${num1} + ${num2} = ${soma}`);// utiliza-se craze ` ` em vez de aspas ' '
