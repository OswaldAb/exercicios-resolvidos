/*
Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
*/

const readline = require('readline-sync')
let numero=0

numero = readline.question('\nInforme um numero: ')

switch (numero){
  case '1':
    console.log('Domingo')
    break;
  case '2':
    console.log('Segunda')
    break
  case '3':
    console.log('Terca')
    break
  case '4':
    console.log('Quarta')
    break
  case '5':
    console.log('Quinta')
    break
  case '6':
    console.log('Sexta')
    break
  case '7':
    console.log('Sabado')
    break
  default:
    console.log('Valor Invalido!')
    break
}
