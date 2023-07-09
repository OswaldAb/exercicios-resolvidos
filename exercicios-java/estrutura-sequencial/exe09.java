import java.util.Scanner;
/*
Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a
temperatura em graus Celsius.

C = 5 * ((F-32) / 9).
*/

public class exe9{
  public static void main(String[] args){

    Scanner leitor = new Scanner(System.in);
    double temperatura_fahrenheit=0, temperatura_celsius=0;

    System.out.printf("\nInforme a temperatura em graus Fahrenheit: ");
    temperatura_fahrenheit = leitor.nextDouble();

    temperatura_celsius = 5 * ((temperatura_fahrenheit-32) / 9);

    System.out.printf("A temperatura convertida para celsius %.2f °C.\n", temperatura_celsius);

  }
}
