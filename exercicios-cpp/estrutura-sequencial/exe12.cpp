#include <iostream>
#include <locale>
#include <iomanip>

/*
Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo
que calcule seu peso ideal, usando a seguinte f�rmula: (72.7*altura) - 58
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	
	float altura=0, peso_ideal=0;
	
	cout << "Informe a sua altura: "; cin >> altura;
	peso_ideal = (72.7 * altura) - 58;
	
	cout << fixed << setprecision(2);
	
	cout << "\nCom rela��o a sua altura, seu peso idaal seria " << peso_ideal << "Kg";
	
	
	return 0;	
}
