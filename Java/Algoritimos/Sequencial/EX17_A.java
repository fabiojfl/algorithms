package Sequencial;

import java.util.*;
import java.text.*;

/* 
 * 17) Um trabalhador recebeu seu salário e o depositou em sua conta bancária. 
 * Esse trabalhador emitiu dois cheques e agora deseja saber o seu saldo atual. 
 * 
 * Sabe-se que cada operacão bancária de retirada  paga CPMF de 0,38% e o 
 * salario inicial da conta esta zerado.
 * 
 */

public class EX17_A 
{
	public static void main(String args[])
	{
		double deposito, cheque1, cheque2, vlr_atual, saq1, saq2,vlr_saq, calc_imp1, calc_imp2, vlr_imp;
		
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		
		DecimalFormat casas;
		casas = new DecimalFormat("0.00");
		
		System.out.println("Digite o valor do depósito. ");
		deposito = entrada.nextDouble();
		
		System.out.println("Qual o valor do 1° cheque?");
		cheque1 = entrada.nextDouble();
		System.out.println("Qual o valor do 2° cheque?");
		cheque2 = entrada.nextDouble();
		
		saq1 = deposito - cheque1;
		calc_imp1 = saq1 * 0.38/100;
		
		saq2 = saq1 - cheque2;
		calc_imp2 = saq2 * 0.38/100;
		
		vlr_imp  = calc_imp1 + calc_imp2;
		vlr_saq  = saq1 + saq2;
		
		vlr_atual = vlr_saq - vlr_imp - deposito;
		
		//saldo = salario - cheque1 - cheque2 - cpmf1 - cpmf2;
		
		System.out.println("O Saldo Anterior é: "+ casas.format(deposito));
		System.out.println("Saque do cheque 1: "+ cheque1 + " ( - ) Saldo a meneos "+casas.format(saq1)+ "(-CPMF) "+ casas.format(calc_imp1));
		System.out.println("Saque do cheque 2: "+ cheque2 + " ( - ) Saldo a meneos "+casas.format(saq2)+ "(-CPMF) "+ casas.format(calc_imp2));
		System.out.println("Impostos CPMF: " + casas.format(vlr_imp));
		System.out.println("Saldo atual com impostos: "+ casas.format(vlr_atual));
		
		entrada.close();
	}
}
