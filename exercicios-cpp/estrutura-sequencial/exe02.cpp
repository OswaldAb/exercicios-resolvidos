#include <iostream> // cin - cout
#include <locale> // setlocale

/*
Fa�a um Programa que pe�a um n�mero e ent�o mostre a mensagem 
O n�mero informado foi [n�mero].
*/

using namespace std;

int main(){
	setlocale(LC_ALL, "portuguese");
	
	int num;
	
	cout << "Informe um n�mero: ";
	cin >> num;
	
	cout << "\nO n�mero informado foi " << num;
	
	return 0;
}
