
const readline = require('readline-sync')

/*
Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
*/

let sexo=""

sexo = readline.question("\nQual eh o seu sexo (M)asculino / (f)eminino: ").toLowerCase() // toUpperCase()

if(sexo === 'm'){
  console.log('Masculino');
}
else if(sexo === 'f'){
  console.log('Feminino');
}else{
  console.log('Sexo Inválido');
}
