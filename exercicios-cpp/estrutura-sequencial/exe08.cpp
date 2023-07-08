#include <iostream>
#include <locale>
#include <iomanip>

/*
Faça um Programa que pergunte quanto você ganha por hora e o número
 de horas trabalhadas no mês. Calcule e mostre o total do seu salário
  no referido mês.
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	float valor_hora=0, horas_trabalhadas_mes=0;
	float salario_bruto=0;
	
	cout << "Quanto você ganha por hora trabalhada: "; cin >> valor_hora;
	cout << "Quantas horas você trabalhou este mês: "; cin >> horas_trabalhadas_mes;
	
	salario_bruto = valor_hora * horas_trabalhadas_mes;
	
	cout << fixed << setprecision(2);
	cout << "\nSeu salário é R$ " << salario_bruto;
	
	
	return 0;
}
