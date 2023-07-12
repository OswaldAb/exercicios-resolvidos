
/*
João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
*/

const readline = require('readline-sync')

const peso_max_permitido = 50
const peso_peixe_pescado = readline.questionFloat('\nInforme o peso total dos peixes: ')

let peso_acima_do_limite
let multa = 0

if (peso_peixe_pescado > peso_max_permitido){
  peso_acima_do_limite = (peso_peixe_pescado - peso_max_permitido)
  multa = peso_acima_do_limite * 4
}

if (multa === 0){
  console.log('Nenhuma multa sera aplicada')
}
else{
  console.log(`O peso utrapassou ${peso_acima_do_limite} Kg`)
  console.log(`A multa sera de R$ ${multa.toFixed(2)}`)
}
