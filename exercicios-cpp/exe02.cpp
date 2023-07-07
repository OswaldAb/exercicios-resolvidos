#include <iostream> // cin - cout
#include <locale> // setlocale

/*
Faça um Programa que peça um número e então mostre a mensagem 
O número informado foi [número].
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	
	int num;
	
	cout << "Informe um número: ";
	cin >> num;
	
	cout << "\nO número informado foi " << num;
	
	return 0;
}
