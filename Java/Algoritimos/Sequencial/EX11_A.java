package Sequencial;

import java.util.*;


public class EX11_A 
{	
	
	public static void main(String args[])
	{		
		int numero, quadrado, cubo; 
		double raizQuadrada, raizCubica;
		
		 Scanner entrada;
		 entrada = new Scanner(System.in);
		 
		 System.out.println("Com o número calcularemos o quadrado, o cubo, a raiz quadrada e a raiz cubica");
		 System.out.println("Por favor, digite o número:  ");
		 
		 numero = entrada.nextInt();
		 
		 quadrado = numero * numero;
		 cubo = numero * numero * numero;
		 
		 raizQuadrada = Math.sqrt(numero);
		 raizCubica = Math.cbrt(numero);
		 
		 System.out.println("O quadrado é:  "+ quadrado);
		 System.out.println("O cubo é: "+ cubo);
		 System.out.println("A raiz quadrada é: "+raizQuadrada);
		 System.out.println("A raiz cubica é: "+raizCubica);
		 
		 entrada.close();
	}
}
