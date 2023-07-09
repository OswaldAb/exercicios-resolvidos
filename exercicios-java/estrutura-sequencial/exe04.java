import java.util.Scanner;

/*
Faça um Programa que peça as 4 notas bimestrais e mostre a média.
*/

public class exe4{

  public static void main(String[] args){
    Scanner leitor = new Scanner(System.in);

    float n1=0, n2=0, n3=0, n4=0, media=0;


    // nextInt() 
    // nextFloat()
    // nextDouble()
    System.out.print("Informe a primeira nota: ");
    n1 = leitor.nextFloat();
    System.out.print("Informe a segunda nota: ");
    n2 = leitor.nextFloat();
    System.out.print("Informe a terceira nota: ");
    n3 = leitor.nextFloat();
    System.out.print("Informe a quarta nota: ");
    n4 = leitor.nextFloat();

    media = (n1+n2+n3+n4) / 4;

    System.out.printf("A média é %.2f", media);


  }
}
