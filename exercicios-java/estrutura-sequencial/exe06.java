import java.util.Scanner;

// C:\Users\roger\OneDrive\Área de Trabalho\osvaldo\java\estrutura-sequencial

/*
Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.]
*/

public class exe6{

  public static void main(String[] args){
    Scanner leitor = new Scanner(System.in);

    double raio=0, area=0;
    double pi = Math.PI; // Obtendo valor de PI

    System.out.printf("%nInforme o raio do circulo: ");
    raio = leitor.nextFloat();

    area = pi * Math.pow(raio, 2);

    System.out.printf("\nA área do circulo é %.2f.%n%n", area);

  }
}
