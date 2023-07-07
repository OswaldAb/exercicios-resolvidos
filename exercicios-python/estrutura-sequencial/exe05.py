'''
Faça um Programa que converta metros para centímetros.
'''
# 0,01 m = 1 cm -> para converter metros para centimetros é so multiplicar por 100

metros = float(input('Informe a quantidade de metros: '))

conversao = metros * 100

print('{:.2f} m em centimetros é {:.2f} cm'.format(metros, conversao))
