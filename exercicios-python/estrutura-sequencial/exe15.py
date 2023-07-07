'''
Faça um Programa que pergunte quanto você ganha por hora e o número
de horas trabalhadas no mês. Calcule e mostre o total do seu salário
no referido mês, sabendo-se que são descontados 11% para o Imposto de
Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

salário bruto.
quanto pagou ao INSS.
quanto pagou ao sindicato.
o salário líquido.
calcule os descontos e o salário líquido, conforme a tabela abaixo:
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
Obs.: Salário Bruto - Descontos = Salário Líquido.
'''

valor_da_hora = float(input('Informe o valor de uma hora de serviço: '))
qtd_horas_mes = float(input('Informe a quantidade de horas trabalhadas no mês: '))

salario_bruto = valor_da_hora * qtd_horas_mes
imposto_de_renda = salario_bruto * 0.11
inss = salario_bruto * 0.08
sindicato = salario_bruto * 0.05
salario_liquido = (salario_bruto - imposto_de_renda - inss - sindicato)

print()
print('Salario bruto R$ {:.2f}'.format(salario_bruto))
print('Imposto de renda R$ {:.2f}'.format(imposto_de_renda))
print('INSS R$ {:.2f}'.format(inss))
print('Sindicato R$ {:.2f}'.format(sindicato))
print('Salario liquido R$ {:.2f}'.format(salario_liquido))
