import java.util.Scanner;

/*
Faça um Programa que calcule a área de um quadrado,
em seguida mostre o dobro desta área para o usuário.
*/

public class exe7{

  public static void main(String[] args){

    Scanner leitor = new Scanner(System.in);

    double lado=0, area=0, dobro_area=0;

    System.out.printf("\nInforme o tamanho do lado de um quadrado: ");
    lado = leitor.nextDouble();

    area = Math.pow(lado, 2);
    dobro_area = area * 2;

    System.out.printf("A área do quadrado é %.2f e o dobro da area é %.2f.\n", area, dobro_area);

  }
}

// C:\Users\roger\OneDrive\Área de Trabalho\osvaldo\java\estrutura-sequencial
