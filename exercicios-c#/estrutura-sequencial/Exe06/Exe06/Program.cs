using System;

/*
Faça um Programa que peça o raio de um círculo,
calcule e mostre sua área.
*/

namespace Exe06
{
    internal class Program
    {
        static void Main(string[] args)
        {
            const double PI = 3.141592; // Math.PI
            double area = 0, raio = 0;

            // A = PI * r²

            Console.Write("Informe o raio do circulo: ");
            raio = Convert.ToDouble(Console.ReadLine());

            area = PI * Math.Pow(raio, 2);

            string msg = $"A área do circulo é {area:f2}";

            Console.WriteLine(msg);

            Console.ReadKey();
        }
    }
}
