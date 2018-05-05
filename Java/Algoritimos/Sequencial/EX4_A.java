package Sequencial;

import java.util.*;
import java.text.*;

/*
 * 4.Faça um programa que receba o salário de um funcionário, calcule e mostre o novo salário, sabendo-se que este sofreu um aumento de 25%.
 */


public class EX4_A 
{	
	public static void main(String args[])
	{
		
		double salario, calc_salario, novo_salario;	
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		DecimalFormat casas;
		casas = new DecimalFormat("0.00");

		System.out.println("Digite o salário e confira o reajuste de 25% ");
		
		salario = entrada.nextDouble();
		
		calc_salario = salario * 25/100;
		novo_salario = calc_salario + salario;		
		
		System.out.println("O Salário reajustado é de: "+ casas.format(novo_salario));
		
	}
}
