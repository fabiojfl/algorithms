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
		 
		 System.out.println("Com o n�mero calcularemos o quadrado, o cubo, a raiz quadrada e a raiz cubica");
		 System.out.println("Por favor, digite o n�mero:  ");
		 
		 numero = entrada.nextInt();
		 
		 quadrado = numero * numero;
		 cubo = numero * numero * numero;
		 
		 raizQuadrada = Math.sqrt(numero);
		 raizCubica = Math.cbrt(numero);
		 
		 System.out.println("O quadrado �:  "+ quadrado);
		 System.out.println("O cubo �: "+ cubo);
		 System.out.println("A raiz quadrada �: "+raizQuadrada);
		 System.out.println("A raiz cubica �: "+raizCubica);
		 
		 entrada.close();
	}
}
