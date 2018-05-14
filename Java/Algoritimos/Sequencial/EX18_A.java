package Sequencial;

import java.util.*;

/*
 * 18) Pedro comprou um saco de ra��o com o peso em quilos. Ele possui dois gatos, para os quais fornece a quantidade de ra��o em gramas. 
 * A quantidade di�ria de ra��o fornecida para cada gato � sempre a mesma. 
 * Fa�a um programa que receba o peso do saco de ra��o e a quantiddade de ra��o fornecida para cada gato, 
 * calcule e mostre quanto restar� de ra��o no saco ap�s cinco dias.
 * 
 */

public class EX18_A 
{
	public static void main(String args[])
	{
		float peso_saco, qtd_gato1, qtd_gato2, valor_final;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		System.out.println("Digite a quantidade em KG ");
		peso_saco = entrada.nextFloat();
		
		System.out.println("Qual a qtd (em gramas) do 1� gato: ");
		qtd_gato1 = entrada.nextFloat(); 
		
		System.out.println("Qual a qtd (em gramas) do 2� gato: ");
		qtd_gato2 = entrada.nextFloat();
		
		//convertendo para Kg
		qtd_gato1 = qtd_gato1 /1000;
		qtd_gato2 = qtd_gato2 /1000;
		
		valor_final = peso_saco - 5 * (qtd_gato1 + qtd_gato2);
		
		
		System.out.println("A quantidade de ra��o que restar� de ra��o no saco ap�s cinco dias "+ valor_final);
		
		entrada.close();
	}
}
