using System;
/*
Faça um Programa que pergunte quanto você ganha por hora e
o número de horas trabalhadas no mês. 
Calcule e mostre o total do seu salário no referido mês.
 */

namespace Exe08
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double valorHora = 0, quantidadeHorasTrabalhadas = 0, salarioBruto = 0;

            Console.Write("Informe o valor da hora: ");
            valorHora = Convert.ToDouble(Console.ReadLine());
            Console.Write("Informe a quantidade de horas trabalhadas no mês: ");
            quantidadeHorasTrabalhadas = Convert.ToDouble(Console.ReadLine());

            salarioBruto = valorHora * quantidadeHorasTrabalhadas;

            string msg = $"Seu salário este mês é R$ {salarioBruto:f2}";

            Console.WriteLine(msg);

            Console.ReadKey();

        }
    }
}
