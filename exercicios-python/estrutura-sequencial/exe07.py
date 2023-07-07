'''
Faça um Programa que calcule a área de um quadrado, em seguida mostre
o dobro desta área para o usuário.
'''

lado = float(input('Informe tamanho do lado do quadrado: '))

area = lado * lado
dobro_area = area * 2

print('A area do quadrado é {:.2f} e o dobro da area é {:.2f}'.format(area, dobro_area))
