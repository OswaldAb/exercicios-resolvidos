#include <iostream>
#include <locale>
#include <iomanip>

/*
Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	
	float altura=0, peso_ideal_m=0, peso_ideal_h=0;
	
	cout << "Informe a sua altura: "; cin >> altura;
	
	peso_ideal_m= (62.1 * altura) - 44.7; // mulheres
	peso_ideal_h= (72.7 * altura) - 58; // homens
	
	cout << fixed << setprecision(2);
	
	cout << "\nCom relação a sua altura seu peso ideal é:\n";
	cout << "Se for homem " << peso_ideal_h << " kg\n";
	cout << "Se for mulher " << peso_ideal_m  << " kg\n";
	
	
	
	return 0;
}
