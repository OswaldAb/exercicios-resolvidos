
/*
Faça um Programa que peça um número e então mostre a mensagem
 O número informado foi [número].
*/

// para obter o valor eu irei usar a biblioteca ' readline-sync '
//readline-sync é uma biblioteca de entrada/saída de dados em Node.js
// para instalar var até a pasta onde ira ficar os aquivos javascript pelo
// terminal ex: C:\Users\pastas\pasta-js
// digite: npm install readline-sync

const readline = require('readline-sync')

let numero = readline.question('Informe um numero: ')

console.log('O número informado foi', numero)
