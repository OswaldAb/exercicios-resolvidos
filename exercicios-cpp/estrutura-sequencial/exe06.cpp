#include <iostream> // cout ,cin
#include <cmath> // pow
#include <locale> // setlocale
#include <iomanip> // setprecision

# define PI 3.141592

/*
Fa�a um Programa que pe�a o raio de um c�rculo, calcule e mostre sua �rea.
*/

// area = pi * raio^2

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	float raio=0, area=0;
	
	cout << "Informe o raio do circulo: "; cin >> raio;
	
	area = PI * pow(raio, 2);
	
	cout << fixed << setprecision(2);
	cout << "A area do circulo � " << area << endl;
	
	
	return 0;
}
