#include <iostream>
#include <locale>
#include <iomanip>

/*
Fa�a um Programa que pergunte quanto voc� ganha por hora e o n�mero
 de horas trabalhadas no m�s. Calcule e mostre o total do seu sal�rio
  no referido m�s.
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	float valor_hora=0, horas_trabalhadas_mes=0;
	float salario_bruto=0;
	
	cout << "Quanto voc� ganha por hora trabalhada: "; cin >> valor_hora;
	cout << "Quantas horas voc� trabalhou este m�s: "; cin >> horas_trabalhadas_mes;
	
	salario_bruto = valor_hora * horas_trabalhadas_mes;
	
	cout << fixed << setprecision(2);
	cout << "\nSeu sal�rio � R$ " << salario_bruto;
	
	
	return 0;
}
