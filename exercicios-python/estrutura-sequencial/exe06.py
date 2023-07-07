from math import pi, pow

'''
Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
'''

raio = float(input('Informe o raio do circulo: '))

# area = pi * raio^2
area = pi * pow(raio, 2)

print('A area do circulo é {:.2f}'.format(area))
