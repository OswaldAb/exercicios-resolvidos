#include <iostream>
#include <locale>

/*
Fa�a um Programa que calcule a �rea de um quadrado, em seguida mostre
 o dobro desta �rea para o usu�rio.
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	
	float lado=0, area=0, dobro_area=0;
	
	cout << "Informe o tamanho de um dos lados do quadrado: ";
	cin >> lado;
	
	area = lado * lado;
	dobro_area = area * 2;
	
	cout << "\nO dobro da area do quadrado � " << dobro_area;
	
}
