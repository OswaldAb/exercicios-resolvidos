import java.util.Scanner;

/*
Faça um Programa que peça a temperatura em graus Celsius, transforme e
mostre em graus Fahrenheit.
*/

public class exe10{
  public static void main(String[] args){
    Scanner leitor = new Scanner(System.in);

    double temperatura_fahrenheit=0, temperatura_celsius=0;

    System.out.printf("\nInforme a temperatura em graus Celsius: ");
    temperatura_celsius = leitor.nextDouble();

    temperatura_fahrenheit = (temperatura_celsius * 9/5) + 32;

    System.out.printf("A temperatura convertida para fahrenheit %.2f °F.\n", temperatura_fahrenheit);


  }
}
