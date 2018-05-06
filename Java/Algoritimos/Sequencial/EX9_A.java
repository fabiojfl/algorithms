package Sequencial;
import java.util.Scanner;

/**
 * 9. Faça um programa que calcule e mostre a area de um triangulo.
 * Sabe-se que: Area = (base*altura)/2
 */

public class EX9_A 
{
	public static void main(String args[])
	{
		int area, base, altura;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		System.out.println("Calculo do Triângulo");
		System.out.println("Digite o tamanho da base");
		base = entrada.nextInt();
		
		System.out.println("Digite o tamanho da altura");
		altura = entrada.nextInt();
		
		area = (base * altura)/2;
		
		System.out.println("O medida da área é igual a: "+ area);
		
		entrada.close();
	}
}
