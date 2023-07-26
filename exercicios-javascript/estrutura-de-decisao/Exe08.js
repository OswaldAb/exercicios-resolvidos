
/*
Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
*/

const readline = require('readline-sync')

let precos = []
let menorPreco=0, indice=0;

preco1 = readline.questionFloat('Informe o preco do produto 1: ')
precos.push(preco1)
preco2 = readline.questionFloat('Informe o preco do produto 2: ')
precos.push(preco2)
preco3 = readline.questionFloat('Informe o preco do produto 3: ')
precos.push(preco3)

menorPreco = preco1

for(let i in precos){
  if(menorPreco < precos[i]){
    menorPreco = precos[i]
    indice = i
  }
}

console.log(`O produto ${indice+1} eh o que a presenta o menor preco que eh de R$${menorPreco.toFixed(2)}`);
