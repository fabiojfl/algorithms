package Sequencial;
import java.util.*;
import java.text.*;

/*
 * 2.Faca um programa que receba tres notas, calcule e mostre a media aritmetica entre elas.
 * */

public class EX2_A {
	
	public static void main(String args[]){
		
		float med1, med2, med3, res;
		
		Scanner entrada;
		entrada = new Scanner(System.in);
		DecimalFormat casas;
	    casas = new DecimalFormat ("0.00"); 
		
		System.out.println("Qual foi a primeira media? ");
		med1 = entrada.nextFloat();
		System.out.println("Qual foi a segunda media? ");
		med2 = entrada.nextFloat();
		System.out.println("Qual foi a terceira media? ");
	    med3 = entrada.nextFloat();
	    
	    res = (med1 + med2 + med3)/3;
	    
	    System.out.println("A média aritmetrica é: " + casas.format(res));
	    
	    entrada.close();
		
	}
}
