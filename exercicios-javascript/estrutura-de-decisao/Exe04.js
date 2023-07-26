
/*
Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
*/

const readline = require('readline-sync')

let vogais = ['a','e','i','o','u']
let letra='';
let encontrou = false

letraDigitada = readline.question('Digite uma letra: ')

for(let letra of vogais){
  if(letraDigitada.toLowerCase() == letra){
    encontrou = true
  }
}

if(encontrou){
  console.log('Eh uma vogal')
}
else{
  console.log('Eh uma consoanete')
}
