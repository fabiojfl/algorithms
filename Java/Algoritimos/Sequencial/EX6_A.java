package Sequencial;

import java.util.*;
import java.text.*;

/**
 * 6. faça um programa que receba o salario-base de um funcionario, calcule e mostre o salario a receber, sabendo-se que esse funcionario 
 * em gratificação de 5% sobre o salario base e paga imposto de 7% sobre o salario-base.
 */

public class EX6_A 
{
	public static void main(String args[])
	{		
		float salario_base, salario_receber, calc_gratificacao, calc_imposto;
		int gratificacao = 5, imposto = 7; 
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		DecimalFormat casas;
		casas = new DecimalFormat("0.00");
		
		System.out.println("Digite o salario base do funcionário");
		salario_base = entrada.nextFloat();
		
		calc_gratificacao = salario_base * gratificacao/100;
		calc_imposto = salario_base * imposto/100;
		
		salario_receber = salario_base + calc_gratificacao - calc_imposto;
		
		System.out.println("Calculo de 5% a ser acrescentado é: R$ "+ casas.format(calc_gratificacao));
		System.out.println("Calculo de 7% a ser retirado é: R$ "+ casas.format(calc_imposto));
		
		System.out.println("Salario a receber: R$ "+ casas.format(salario_receber));
		
		
		
	}
}
