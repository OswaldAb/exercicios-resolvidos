/*
Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

const readline = require('readline-sync')
let res = ''

console.log('\nInforme o turno que você estuda')
console.log('\nM - Matutino\nV - Vespertino\nN - Noturno\n')

res = readline.question().toLowerCase()

switch(res){
  case 'm':
    console.log('\nBom Dia!');
    break
  case 'v':
    console.log('\nBoa Tarde!');
    break
  case 'n':
    console.log('\nBoa Noite!');
    break
  default:
    console.log('\nValor Invalido!');
    break
}
