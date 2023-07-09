import java.util.Scanner;
/*
Faça um Programa que peça dois números e imprima a soma.
*/

public class exe3{ // classe

  public static void main(String[] args){
    Scanner leitor = new Scanner(System.in);

    int num1=0, num2=0, soma=0;

    System.out.print("Informe um número: ");
    num1 = leitor.nextInt();
    System.out.print("Informe outro número: ");
    num2 = leitor.nextInt();

    soma = num1 + num2;

    System.out.printf("A soma de %d + %d = %d",num1, num2, soma);

  }

}
