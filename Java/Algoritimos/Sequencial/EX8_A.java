package Sequencial;
import java.util.*;
import java.text.*;

/** 
 * 8. Faça um programa que receba o valor de um depósito e o valor da taxa de juros, calcule e mostre o valor do rendimento e o valor total depois do rendimento.
 */

public class EX8_A 
{	
	public static void main(String Args[])
	{
		double vlr_dep,vlr_rendimento, vlr_total;
		int vlr_tx;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		DecimalFormat casas;
		casas = new DecimalFormat("0.00");
		
		System.out.println("Digite o deposito");
		vlr_dep = entrada.nextFloat();
		
		System.out.println("Digite o valor da taxa de juros. Ex 10 é igual a 10%");
		vlr_tx = entrada.nextInt();
		
		vlr_rendimento = vlr_dep * vlr_tx/100;
		vlr_total = vlr_dep + vlr_rendimento;
		
		System.out.println("O valor total do rendimento é: "+ casas.format(vlr_rendimento));
		System.out.println("O valor total do rendimento do depósito é: "+ casas.format(vlr_total));
	}
}
