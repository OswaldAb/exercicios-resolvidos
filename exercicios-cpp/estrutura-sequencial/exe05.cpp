#include <iostream>
#include <locale>

/*
Fa�a um Programa que converta metros para cent�metros.
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	
	float metros=0, centimetros=0;
	
	cout << "Informe a quantidade de metros: "; cin >> metros;
	
	centimetros = metros * 100;
	
	cout << endl; // quebra de linha
	cout << metros << " m em centimetros � " << centimetros << " cm";
	
	
}
