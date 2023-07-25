using System;

/*
Faça um Programa que peça a temperatura em graus Celsius,
transforme e mostre em graus Fahrenheit. (°C × 9/5) + 32 = °F


 */

namespace Exe10
{
    public class Program
    {
        static void Main(String[] args)
        {
            double temperaturaCelsius = 0, temperaturaFahrenheit = 0;

            Console.Write("Informe a temperatura em graus Celsius: ");
            temperaturaCelsius = Convert.ToDouble(Console.ReadLine());

            temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) +32;

            string msg = string.Format("A temperatura convertida para fahrenheits é {0:f2} °F", temperaturaFahrenheit);

            Console.WriteLine(msg);

            Console.ReadKey();
        }
    }
}
