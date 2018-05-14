package Sequencial;

import java.util.*;
import java.text.*;

/*
 * 15) O custo ao consumidor de um carro novo é a soma do preço de fábrica com o percentual de lucro do distribuidor e dos impostos aplicados ao preço de fábrica. 
 * Faça um programa que receba o preço de fábrica de um veículo, o percentual de lucro do distribuidor e o percentual de impostos, calcule e mostre: 
 * 
 * a) o valor correspondente ao lucro do distribuidor; 
 * b) o valor correspondente aos impostos; 
 * c) o preço final do veículo.
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
		
		System.out.println("Digite o preço de fábrica do veículo");
		prec_fabrica_veiculo = entrada.nextFloat();
		
		System.out.println("Digite o percentual lucro do distribuidor ");
		lucro_distribuidor = entrada.nextFloat();
		
		System.out.println("Dite o percentual de impostos acumulados");
		perc_impostos = entrada.nextFloat();
		
		vlr_luc_distribuidor = prec_fabrica_veiculo * lucro_distribuidor/100;
		System.out.println("O valor correspondente de:"+ lucro_distribuidor + "% ao lucro do distribuidor é de :" +casas.format(vlr_luc_distribuidor));
		
		vlr_perc_impostos = prec_fabrica_veiculo * perc_impostos/100; 
		System.out.println("O valor correspondente " + perc_impostos + "% aos impostos é de :"+casas.format(vlr_perc_impostos));
		
		valor_total = vlr_luc_distribuidor + vlr_perc_impostos;
		System.out.println("O preço final do veículo é: "+ casas.format(valor_total));
		
		entrada.close();
		
	}
}
