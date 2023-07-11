
/*
Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
*/

const readline = require('readline-sync')
const math = require('mathjs')

let lado = readline.questionFloat('\nInforme o tamanho do lado do quadrado: ')

let area = math.pow(lado, 2) // = lado * lado
let dobro_area = area * 2

console.log(`O dobro da area eh ${dobro_area}`)
