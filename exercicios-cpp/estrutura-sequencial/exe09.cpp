#include <iostream>
#include <locale>
#include <iomanip>

/*
Faça um Programa que peça a temperatura em graus Fahrenheit, transforme
e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	
	float temperatura_fahrenheit=0, temperatura_celsius=0;
	
	cout << "Informe a temperatura em fahrenheits: "; cin >> temperatura_fahrenheit;
	
	temperatura_celsius = 5 * ((temperatura_fahrenheit-32) / 9);
	
	cout << fixed << setprecision(2);
	cout << "\nA temperatura convertida para graus celsius é " << temperatura_celsius << "°C";
	
	
	return 0;
}
