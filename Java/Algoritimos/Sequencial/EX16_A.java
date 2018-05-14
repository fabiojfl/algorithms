package Sequencial;

import java.util.*;
import java.text.*;

/* 16) Faça um programa que receba o número de horas trabalhadas e o valor do salário mínimo. 
 * 
 * Calcule e mostre o salário a receber seguindo as regras: 
 * 
 * a) a hora trabalhada vale a metade do salário mínimo. 
 * b) o salário bruto equivale ao número  de horas trabalhadas multiplicando pelo valor da hora trabalhada. 
 * c) o imposto equivale  a 3% so salário bruto. 
 * d) o salário a receber equivale ao salário bruto menos o imposto.
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
		
		System.out.println("Quanto é o salário mínimo? ");
		salario_minimo = entrada.nextFloat();
		vlr_hora_trabalhada = salario_minimo/2; 
		
		System.out.println("Quantas horas foram trabalhadas");
		qtd_horas_trabalhadas = entrada.nextInt();
		salario_bruto = qtd_horas_trabalhadas * vlr_hora_trabalhada;
		
		imp_salr_bruto  = salario_bruto * 3/100;
		salario_receber = salario_bruto - imp_salr_bruto; 
		
		System.out.println("O valor da hora trabalhada é : "+ casas.format(vlr_hora_trabalhada));
		System.out.println("O salário bruto é: "+ casas.format(salario_bruto));
		System.out.println("O valor do imposto equivalente a 3% do salario bruto é: "+ casas.format(imp_salr_bruto));
		System.out.println("Salário a receber: "+ casas.format(salario_receber));
		
		entrada.close();
	}
}
