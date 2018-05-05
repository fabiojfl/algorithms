package Sequencial;
import java.util.*;
import java.text.*;

/**
 * 5.Faça um programa que receba o salário de um funcionário e o percentual de aumento, calcule e mostre o aumento do salário.
 */

public class EX5_A 
{
	public static void main(String args[])
	{		
		float salario, calc_sal, aumento; 
		int  percentual;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		DecimalFormat casas;
		casas = new DecimalFormat("0.00");
		
		System.out.println("Digite o salario");
		salario = entrada.nextFloat();
		
		System.out.println("Digite o reajuste em percentual 'Ex: 12 que será igual a 12%'");
		percentual = entrada.nextInt();
		
		calc_sal  = salario * percentual/100; 
		aumento   = salario +(salario * percentual/100);
		
		System.out.println("O salario é R$"+ salario); 
		System.out.println("O reajuste é R$"+ calc_sal); 
		System.out.println("O valor reajustado de "+ percentual + "% é de: R$"+ aumento);	
	}
}
