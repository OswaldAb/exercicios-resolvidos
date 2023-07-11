
/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
*/

const readline = require('readline-sync')

let valor_hora = readline.questionFloat('\nInforme quanto voce ganha por hora: ')
let horas_trabalhada = readline.questionFloat('Informe a quantidade de horas trabalhadas no mes: ')

let salario_bruto = valor_hora * horas_trabalhada

console.log(`Seu salário este mes eh R$ ${salario_bruto.toFixed(2)}`)
