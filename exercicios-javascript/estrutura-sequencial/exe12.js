
/*
Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
*/

const readline = require('readline-sync')

let altura = readline.questionFloat('\nInforme a sua altura: ')

const peso_ideal = (72.7 * altura) - 58

console.log(`Em relacao a sua altura seu peso ideal seria ${peso_ideal} Kg`);
