from math import pow

'''
Faça um Programa que peça 2 números inteiros e um número real.

Calcule e mostre:

1) O produto do dobro do primeiro com metade do segundo .
2) A soma do triplo do primeiro com o terceiro.
3) O terceiro elevado ao cubo.
'''

num1 = int(input('Informe um número: '))
num2 = int(input('Informe outro número: '))
num3 = float(input('Informe outro número: '))

resposta_1 = (num1 * 2) * (num2 / 2)
resposta_2 = (num1 * 3) + num3
resposta_3 = pow(num3, 3)

print(f'O produto do dobro do primeiro com metade do segundo = {resposta_1}')
print(f'A soma do triplo do primeiro com o terceiro = {resposta_2}')
print(f'O terceiro elevado ao cubo = {resposta_3}')
