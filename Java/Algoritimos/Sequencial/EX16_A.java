package Sequencial;

import java.util.*;
import java.text.*;

/* 16) Fa�a um programa que receba o n�mero de horas trabalhadas e o valor do sal�rio m�nimo. 
 * 
 * Calcule e mostre o sal�rio a receber seguindo as regras: 
 * 
 * a) a hora trabalhada vale a metade do sal�rio m�nimo. 
 * b) o sal�rio bruto equivale ao n�mero  de horas trabalhadas multiplicando pelo valor da hora trabalhada. 
 * c) o imposto equivale  a 3% so sal�rio bruto. 
 * d) o sal�rio a receber equivale ao sal�rio bruto menos o imposto.
 * 
 */


public class EX16_A 
{	
	public static void main(String args[])
	{
		float salario_minimo, vlr_hora_trabalhada, salario_bruto, imp_salr_bruto, salario_receber;
		int qtd_horas_trabalhadas;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		DecimalFormat casas;
		casas = new DecimalFormat("0.00");
		
		System.out.println("Quanto � o sal�rio m�nimo? ");
		salario_minimo = entrada.nextFloat();
		vlr_hora_trabalhada = salario_minimo/2; 
		
		System.out.println("Quantas horas foram trabalhadas");
		qtd_horas_trabalhadas = entrada.nextInt();
		salario_bruto = qtd_horas_trabalhadas * vlr_hora_trabalhada;
		
		imp_salr_bruto  = salario_bruto * 3/100;
		salario_receber = salario_bruto - imp_salr_bruto; 
		
		System.out.println("O valor da hora trabalhada � : "+ casas.format(vlr_hora_trabalhada));
		System.out.println("O sal�rio bruto �: "+ casas.format(salario_bruto));
		System.out.println("O valor do imposto equivalente a 3% do salario bruto �: "+ casas.format(imp_salr_bruto));
		System.out.println("Sal�rio a receber: "+ casas.format(salario_receber));
		
		entrada.close();
	}
}
