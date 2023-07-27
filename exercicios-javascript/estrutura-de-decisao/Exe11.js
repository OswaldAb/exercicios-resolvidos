/*
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.
*/

const readline = require('readline-sync')

let salarioBruto=0, percentualReajuste=0, aumento=0, novoSalario=0

salarioBruto = readline.questionFloat('\nInforme o seu salario: ')

if(salarioBruto <= 280){
  percentualReajuste = 0.2 // 20%
}
else if(salarioBruto > 280 && salarioBruto <= 700){
  percentualReajuste = 0.15 // 15%
}
else if(salarioBruto > 700 && salarioBruto <= 1500){
  percentualReajuste = 0.1 // 10%
}
else{
  percentualReajuste = 0.05 // 5%
}

aumento = salarioBruto * percentualReajuste
novoSalario += salarioBruto + aumento

console.log(`\nO salario antes do reajuste: R$ ${salarioBruto.toFixed(2)}`)
console.log(`O percentual de aumento aplicado: ${percentualReajuste * 100} %`)
console.log(`O valor do aumento: R$ ${aumento.toFixed(2)}`)
console.log(`O novo salario, apos o aumento: R$ ${novoSalario.toFixed(2)}`);
