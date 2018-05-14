package Sequencial;

import java.util.*;
/**
 	13. Sabe_se que:
 	
	1 pé = 12 polegadas
	1 jarda = 3 pes
	1 milha = 1760 jardas

	Faça um programa que receba a medida em pés, faca as conversoes a seguir e mostre os resultados.

	a) polegadas
	b) jardas
	c) milhas.
*/
public class EX13_A 
{

	public static void main(String args[])
	{
		
		double pe, vlr_polegadas, vlr_jarda, vlr_milhas;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		System.out.println("Digite quantos pés para obeter as devidas conversões em polegadas, jardas, milhas");
		pe = entrada.nextInt();
	
		vlr_polegadas = pe * 12;
		vlr_jarda = pe / 3;		
		vlr_milhas = vlr_jarda / 1760;

		System.out.println("a) O valor calculado em Polegadas: "+ vlr_polegadas);
		System.out.println("b) O valor calculado em Jardas: "+ vlr_jarda);
		System.out.println("c) O valor calculado em Milhas: "+ vlr_milhas);
		
		entrada.close();
		
	}
}
