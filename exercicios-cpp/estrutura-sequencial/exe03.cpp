#include <iostream>

/*
Faça um Programa que peça dois números e imprima a soma.
*/

using namespace std;

int main(){
	int num1=0, num2=0, soma=0;
	
	cout << "Informe um numero: ";
	cin >> num1;
	cout << "Informe outro numero: ";
	cin >> num2;
	
	soma = num1 + num2;
	
	cout << "\nA soma de " << num1 << " + " << num2 << " = " << soma;
	
	
	return 0;	
}
