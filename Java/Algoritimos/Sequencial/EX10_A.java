package Sequencial;
import java.util.Scanner;

/**
 * 10.Fa�a um programa que calcule e mostre a area de um circulo.
 * Sabe-se que: �rea = pi= R pontencia de 2
 */

public class EX10_A 
{
	private static double area;

	public static void main(String args[])
	{
		
		double pi, raio;
		pi = 3.14;
				
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		System.out.println("Digite o raio para calcular a area do circulo");
		raio = entrada.nextDouble();
		
		area = pi * (raio * raio);
		
		System.out.println("�rea do c�rculo =  "+ area);
		
		entrada.close();
		
	}
}