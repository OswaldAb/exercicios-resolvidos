
/*
Faça um Programa que peça as 4 notas bimestrais e mostre a média.
*/

const readline = require('readline-sync')

let nota1 = readline.questionFloat('Informe a primeira nota: ')
let nota2 = readline.questionFloat('Informe a segunda nota: ')
let nota3 = readline.questionFloat('Informe a terceira nota: ')
let nota4 = readline.questionFloat('Informe a quarta nota: ')

let media = (nota1 + nota2 + nota3 + nota4) / 4

/*
existem varios metodos para formatar a saida de números
o que eu irei usar é o

 toFixed()

*/
console.log();
console.log(`A media do aluno eh ${media}`) // sem formatação
console.log(`A media do aluno eh ${media.toFixed(2)}`) // com toFixed()
