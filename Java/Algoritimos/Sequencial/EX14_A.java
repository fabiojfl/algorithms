package Sequencial;

import java.util.*;

/*
 * 14) Fa�a um programa que receba o ano de nascimento de uma pessoa e o  ano atual, calcule  e mostre:
 * 
 * a) a idade dessa pessoa;
 * b) quantos anos essa pessoa ter� em 2050.
 * 
 */

public class EX14_A 
{
	public static void main(String args[])
	{
		int data_nascimento, ano_atual, idade_atual, idade_2050 = 2050, idade_futura;
		
		Scanner entrada;
		
		entrada = new Scanner(System.in);
		
		System.out.println("Qual � a data de nascimento?");
		data_nascimento = entrada.nextInt();
		
		System.out.println("Qual � o ano atual?");
		ano_atual = entrada.nextInt();
		
		idade_atual = ano_atual - data_nascimento;
		idade_futura = idade_2050 - data_nascimento;
		
		System.out.println("Sua idade atual �: "+ idade_atual);
		System.out.println("Caso voc� tenha nascido antes de 2050 a idade que voc� ter� �: " + idade_futura);
		
		entrada.close();
	}
}
