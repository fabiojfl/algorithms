package Sequencial;

import java.util.Scanner;

public class EX10_B {
	
	private static double area;
	
	public static void main(String args[])
	{
		
		double pi, raio;
		pi = 3.14;
				
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		System.out.println("Digite o raio para calcular a area do circulo");
		raio = entrada.nextDouble();

		area = pi * Math.pow(raio, 2);
		
		System.out.println("Área do círculo =  "+ area);
		
		entrada.close();
		
	}

}
