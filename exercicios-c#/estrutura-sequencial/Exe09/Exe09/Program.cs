using System;

/*
Faça um Programa que peça a temperatura em graus Fahrenheit,
transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).
 */

namespace Exe09
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double temperaturaCelsius = 0, temperaturaFahrenheit = 0;

            Console.Write("Informe a  temperatura em graus Fahrenheit: ");
            temperaturaFahrenheit = Convert.ToDouble(Console.ReadLine());

            temperaturaCelsius = 5 * ((temperaturaFahrenheit - 32) / 9);

            string msg = string.Format("A temperatura convertida para celsius é {0:f2} °C", temperaturaCelsius);

            Console.WriteLine(msg);

            Console.ReadKey();
        }
    }
}
