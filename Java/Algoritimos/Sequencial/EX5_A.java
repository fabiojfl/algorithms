package Sequencial;
import java.util.*;
import java.text.*;

/**
 * 5.Fa�a um programa que receba o sal�rio de um funcion�rio e o percentual de aumento, calcule e mostre o aumento do sal�rio.
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
		
		System.out.println("Digite o reajuste em percentual 'Ex: 12 que ser� igual a 12%'");
		percentual = entrada.nextInt();
		
		calc_sal  = salario * percentual/100; 
		aumento   = salario +(salario * percentual/100);
		
		System.out.println("O salario � R$"+ salario); 
		System.out.println("O reajuste � R$"+ calc_sal); 
		System.out.println("O valor reajustado de "+ percentual + "% � de: R$"+ aumento);	
	}
}
