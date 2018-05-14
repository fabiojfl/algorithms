package Sequencial;
import java.util.*;
/**
 * 12.faca um programa que receba dois numeros maiores que zero, calcule e mostre um elevado ao outro.
 */
public class EX12_A 
{
	public static void main(String args[])
	{
		double num1, num2, resposta1, resposta2;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		System.out.println("Adicione o primeiro numero");
		num1 = entrada.nextDouble();
		System.out.println("Adicione o segundo número");
		num2 = entrada.nextDouble();
		
		resposta1 = Math.pow(num1, num2);
		resposta2 = Math.pow(num2, num1);
		
		System.out.println("O primeiro numero evlevado ao segundo (Resposta 1): "+resposta1 );
		System.out.println("O segundo numero evlevado ao primeiro (Resposta 2): "+resposta2 );
		
		entrada.close();
	}
}
