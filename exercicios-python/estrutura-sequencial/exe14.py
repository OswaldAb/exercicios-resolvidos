'''
João Papo-de-Pescador, homem de bem, comprou um microcomputador
para controlar o rendimento diário de seu trabalho. Toda vez que
ele traz um peso de peixes maior que o estabelecido pelo regulamento
de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de
R$ 4,00 por quilo excedente. João precisa que você faça um programa
que leia a variável peso (peso de peixes) e calcule o excesso. Gravar
na variável excesso a quantidade de quilos além do limite e na
variável multa o valor da multa que João deverá pagar.

Imprima os dados do programa com as mensagens adequadas.
'''

peso_permitido = 50.0
excesso = 0

peso_de_peixes = float(input('Informe o peso total de peixes: '))

if peso_de_peixes > peso_permitido:
    excesso = peso_de_peixes - peso_permitido
    
multa = 4 * excesso

print('João devera pagar R$ {:.2f} pelo excesso de {:.2f} Kg'.format(multa, excesso))
