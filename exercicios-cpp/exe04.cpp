#include <iostream>
#include <locale>

/*
Fa�a um Programa que pe�a as 4 notas bimestrais e mostre a m�dia.
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	
	float n1=0, n2=0, n3=0, n4=0, media=0;
	
	cout << "Informe a primrira nota: "; cin >> n1;
	cout << "Informe a segunda nota: "; cin >> n2;
	cout << "Informe a terceira nota: "; cin >> n3;
	cout << "Informe a quarta nota: "; cin >> n4;
	
	media = (n1+n2+n3+n4) / 4;
	
	cout << "\nA m�dia das nota �: " << media;
	
}
