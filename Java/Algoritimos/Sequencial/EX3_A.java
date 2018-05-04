package Sequencial;

import java.util.*;

/*
 * 3.Faca um programa que receba três notas e seus respectivos pesos, calcule e mostre a media ponderada dessas notas.
 */

public class EX3_A {

	public static void main(String args[]){
		
		float nota1, nota2, nota3, peso1, peso2, peso3, media;
		
		Scanner entrada;
		
		entrada = new Scanner(System.in);
		
		System.out.println("Digite 3 notas e os seus pesos para o calculo da média");
		System.out.println("Digite a primeira  nota");
		nota1 = entrada.nextFloat();
		System.out.println("Qual o peso da primeira nota");
		peso1 = entrada.nextFloat();
		
		System.out.println("Digite a segunda nota");
		nota2 = entrada.nextFloat();
		System.out.println("Qual o peso da segunda nota");
		peso2 = entrada.nextFloat();
		
		System.out.println("Digite a terceira nota");
		nota3 = entrada.nextFloat();
		System.out.println("Qual o peso da terceira nota");
		peso3 = entrada.nextFloat();
		
		media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)/(peso1 + peso2 + peso3);
		
		System.out.println("Sua média final " + media);
	}
}
