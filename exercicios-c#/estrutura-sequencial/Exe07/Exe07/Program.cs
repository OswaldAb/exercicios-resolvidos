using System;

/*
Faça um Programa que calcule a área de um quadrado,
em seguida mostre o dobro desta área para o usuário.
*/

namespace Exe07
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double lado = 0, area = 0, dobroArea = 0;

            Console.Write("Informe o tamanho de um dos lados do quadrado: ");
            lado = Convert.ToDouble(Console.ReadLine());
            area = Math.Pow(lado, 2);
            dobroArea = area * 2;

            string msg = $"A area do quadrado é {area} e o dobro da area é {dobroArea}";

            Console.WriteLine(msg);

            Console.ReadKey();
        }
    }
}
