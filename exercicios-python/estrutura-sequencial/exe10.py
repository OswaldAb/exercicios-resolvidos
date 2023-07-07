'''
Faça um Programa que peça a temperatura em graus Celsius,
transforme e mostre em graus Fahrenheit.
'''

temperatura_celsius = float(input('Informe a temperatura em celsius: '))

temperatura_fahrenheit = (temperatura_celsius  * 9/5) + 32


print('A temperatura em fahrenheits é {:.2f}°F'.format(temperatura_fahrenheit))
