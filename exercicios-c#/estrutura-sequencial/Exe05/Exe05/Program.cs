using System;

/*
Faça um Programa que converta metros para centímetros.

1 metro = 100 centimetros

*/

namespace Exe05
{
    public class Program
    {
        static void Main(string[] args)
        {
            double metros = 0, centimetros = 0;

            Console.Write("Informe a medida em metros: ");
            metros = Convert.ToDouble(Console.ReadLine());

            centimetros = metros * 100;

            string msg = $"A medida convertida para centimetros é {centimetros.ToString("F2")} cm";

            Console.WriteLine(msg);

            Console.ReadKey();
        }
    }
}
