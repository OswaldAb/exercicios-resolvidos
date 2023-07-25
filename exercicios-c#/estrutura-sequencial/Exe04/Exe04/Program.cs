using System;

/*
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
*/

/*
Faça um Programa que peça as 4 notas bimestrais e mostre a média.
*/

namespace Exe04
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0, media = 0;

            Console.Write("Informe a primeira nota: ");
            nota1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Informe a segunda nota: ");
            nota2 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Informe a segunda nota: ");
            nota3 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Informe a quarta nota: ");
            nota4 = Convert.ToDouble(Console.ReadLine());

            media = (nota1 + nota2 + nota3 + nota4) / 4;

            string msg = $"A sua média é {media:f2}";

            Console.WriteLine(msg);

            Console.ReadKey();
        }
    }
}
