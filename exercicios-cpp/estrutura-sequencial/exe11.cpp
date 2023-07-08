#include <iostream>
#include <locale>
#include <iomanip>
#include <cmath> // pow

/*
Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:

1) O produto do dobro do primeiro com metade do segundo .
2) A soma do triplo do primeiro com o terceiro.
3) O terceiro elevado ao cubo.
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	
	int num1=0, num2=0;
	float num3=0.0, resposta_1=0, resposta_2=0, resposta_3=0;
	
	cout << "Informe o primeiro número: ";  cin >> num1;
	cout << "Informe o segundo número: ";  cin >> num2;
	cout << "Informe o terceiro número: ";  cin >> num3;
	
	resposta_1= (num1 *  2) * (num2 / 2);
	resposta_2= (num1 * 3) + num3;
	resposta_3= pow(num3, 3);
	
	cout << fixed << setprecision(2);
	
	cout << "\nO produto do dobro do primeiro com metade do segundo = " << resposta_1;
	cout << "\nA soma do triplo do primeiro com o terceiro = " << resposta_2;
	cout << "\nO terceiro elevado ao cubo = " << resposta_3;
	
	return 0;	
}
