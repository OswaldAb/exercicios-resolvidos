'''
Faça um Programa que peça a temperatura em graus Fahrenheit,
transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).
'''

temperatura_fahrenheit = float(input('Informe a temperatura em fahrenheit: '))

temperatura_celcius = 5 * ((temperatura_fahrenheit-32) / 9)

print('A temperatura convertidas para graus celcius é {:.2f}°C'.format(temperatura_celcius))
