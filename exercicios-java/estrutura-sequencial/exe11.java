import java.util.Scanner;
/*
Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo.
*/

public class exe11{
  public static void main(String[] args){
    Scanner leitor = new Scanner(System.in);

    int num1=0, num2=0;
    double num3=0, resposta_1=0, resposta_2=0, resposta_3=0;

    System.out.printf("Informe um número inteiro: ");
    num1 = leitor.nextInt();
    System.out.printf("Informe outro número inteiro: ");
    num2 = leitor.nextInt();
    System.out.printf("Informe um número real: ");
    num3 = leitor.nextDouble();

    resposta_1 = (num1 * 2) * (num2 / 2);
    resposta_2 = (num1 *  3) + num3;
    resposta_3 = Math.pow(num3, 3);

    System.out.printf("\n\nO produto do dobro do primeiro com metade do segundo é %.2f\n", resposta_1);
    System.out.printf("a soma do triplo do primeiro com o terceiro é %.2f.\n", resposta_2);
    System.out.printf("O terceiro elevado ao cubo é %.2f.\n", resposta_3);

  }
}
