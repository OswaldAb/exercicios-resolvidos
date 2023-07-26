
/*
Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/

const readline = require('readline-sync')

let nota1=0, nota2=0,media=0;

nota1 = readline.questionFloat('\nInforme a primeira nota: ')
nota2 = readline.questionFloat('Informe a segunda nota: ')

media = (nota1+nota2) / 2

if(media === 10){
  console.log("Aprovado com Distinção")
}
else if(media >=7){
  console.log("Aprovado")
}
else {
  console.log("Reprovado")
}
