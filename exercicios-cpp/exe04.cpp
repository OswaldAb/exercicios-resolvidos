#include <iostream>
#include <locale>

/*
Faça um Programa que peça as 4 notas bimestrais e mostre a média.
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
	
	cout << "\nA média das nota é: " << media;
	
}
