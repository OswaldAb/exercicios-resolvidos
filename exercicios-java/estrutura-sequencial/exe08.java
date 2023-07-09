import java.util.Scanner;

/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
Calcule e mostre o total do seu salário no referido mês.
*/

public class exe8{
  public static void main(String[] args){

    Scanner leitor = new Scanner(System.in);

    double valor_hora=0, hora_trabalhadas_mes=0, salario_bruto=0;

    System.out.printf("\nInforme quanto você ganha por hora: ");
    valor_hora = leitor.nextDouble();
    System.out.printf("Informe quantas horas você trabalhou neste mês: ");
    hora_trabalhadas_mes = leitor.nextDouble();

    salario_bruto = valor_hora * hora_trabalhadas_mes;

    System.out.printf("Seu salario bruto este mês é R$ %.2f.\n", salario_bruto);

  }
}
