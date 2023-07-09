import java.util.Scanner; // para obter valores com o teclado

/*
Faça um Programa que peça um número e então mostre a mensagem
O número informado foi [número].
*/

public class exe2{ // class

  public static void main(String[] args){ // metodo principal

    Scanner leitor = new Scanner(System.in); // leitor é um objeto da classe Scanner

    int num=0; // variavel do tipo inteiro

    System.out.print("Informe um número: ");
    // nextLine() : String
    // next() : String
    // netxint() : int
    num = leitor.nextInt();


    System.out.printf("O número informado foi %d", num);

  }
}
// C:\Users\roger\OneDrive\Área de Trabalho\osvaldo\java
