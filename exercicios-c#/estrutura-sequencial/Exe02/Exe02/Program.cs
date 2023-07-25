using System;

/*
Faça um Programa que peça um número e então mostre
a mensagem O número informado foi [número].
*/

namespace Exe02
{
    public class Program
    {
        static void Main(string[] args)
        {
            int numero;


            Console.Write("Informe um número: ");

            // Console.ReadLine() obtem  valor do teclado
            // Convert.ToInt32() converte o valor para inteiro

            numero = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("O número informado foi " + numero);

            Console.ReadKey();
        }
    }
}
