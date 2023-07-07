'''
Faça um Programa que pergunte quanto você ganha por hora e o número
de horas trabalhadas no mês. Calcule e mostre o total do seu salário
no referido mês.
'''

valor_hora = float(input('Valor da hora trabalhada: '))
qtd_horas_mes = float(input('Informe quantas horas você trabalhou no mês: '))

salario_bruto = valor_hora * qtd_horas_mes

print('O sálario bruto é R$ {:.2f}'.format(salario_bruto))
