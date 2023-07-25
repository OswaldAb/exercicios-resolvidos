using System;
/*
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
*/

/*
Faça um Programa que peça dois números e imprima a soma.
 */

namespace Exe03
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num1 = 0, num2 = 0, soma = 0;

            Console.Write("Informe um número: ");
            num1 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Informe outro número: ");
            num2 = Convert.ToInt32(Console.ReadLine());

            soma = num1 + num2;

            string mensagem1 = $"A soma entre {num1} + {num2} = {soma}";
            

            Console.WriteLine(mensagem1);

            Console.ReadKey();
        }
    }
}
