package Sequencial;

import java.util.*;
import java.text.*;

/*
 * 15) O custo ao consumidor de um carro novo � a soma do pre�o de f�brica com o percentual de lucro do distribuidor e dos impostos aplicados ao pre�o de f�brica. 
 * Fa�a um programa que receba o pre�o de f�brica de um ve�culo, o percentual de lucro do distribuidor e o percentual de impostos, calcule e mostre: 
 * 
 * a) o valor correspondente ao lucro do distribuidor; 
 * b) o valor correspondente aos impostos; 
 * c) o pre�o final do ve�culo.
 * 
 */

public class EX15_A 
{	
	public static void main(String args[])
	{
		float prec_fabrica_veiculo, lucro_distribuidor, vlr_luc_distribuidor, perc_impostos, vlr_perc_impostos, valor_total;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		DecimalFormat casas;
		casas = new DecimalFormat("0.00");
		
		System.out.println("Digite o pre�o de f�brica do ve�culo");
		prec_fabrica_veiculo = entrada.nextFloat();
		
		System.out.println("Digite o percentual lucro do distribuidor ");
		lucro_distribuidor = entrada.nextFloat();
		
		System.out.println("Dite o percentual de impostos acumulados");
		perc_impostos = entrada.nextFloat();
		
		vlr_luc_distribuidor = prec_fabrica_veiculo * lucro_distribuidor/100;
		System.out.println("O valor correspondente de:"+ lucro_distribuidor + "% ao lucro do distribuidor � de :" +casas.format(vlr_luc_distribuidor));
		
		vlr_perc_impostos = prec_fabrica_veiculo * perc_impostos/100; 
		System.out.println("O valor correspondente " + perc_impostos + "% aos impostos � de :"+casas.format(vlr_perc_impostos));
		
		valor_total = vlr_luc_distribuidor + vlr_perc_impostos;
		System.out.println("O pre�o final do ve�culo �: "+ casas.format(valor_total));
		
		entrada.close();
		
	}
}
