package Sequencial;

import java.util.*;
import java.text.*;

/**
 * 7. Faça um programa que receba o salario-base de um funcionario, calcule e mostre o seu salario a receber, 
 * sabendo-se que esse funcionario tem gratificacao de R$ 50,00 e paga imposto de 10% sobre o salario base.
 */

public class EX7_A 
{
	public static void main(String args[])
	{
		float sal_base, sal_receber,imposto;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		DecimalFormat casas;
		casas = new DecimalFormat("0.00");
		
		System.out.println("Por favor, digite o salário ");
		sal_base = entrada.nextFloat();
		imposto = sal_base * 10/100;		
		sal_receber = sal_base + 50 - imposto;
		System.out.println("Salario a receber R$ "+ casas.format(sal_receber));
	}
	
}
