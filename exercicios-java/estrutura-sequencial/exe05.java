import java.util.Scanner;
/*
Faça um Programa que converta metros para centímetros.
*/

public class exe5{

  public static void main(String[] args){
    Scanner leitor = new Scanner(System.in);

    float metros=0, centimetros=0;

    System.out.print("Informe o comprimento em metros: ");
    metros = leitor.nextFloat();

    centimetros = metros * 100;

    System.out.printf("\n%.2f m convertido para centimetros é %.2f cm.\n",metros, centimetros);


  }
}
