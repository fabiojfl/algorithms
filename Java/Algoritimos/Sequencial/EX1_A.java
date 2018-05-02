package Sequencial;

import java.util.*;

public class EX1_A {
	
	public static void main (String args[]){
		
		int n1,n2,n3,n4,soma;
	    Scanner entrada;
	    entrada = new Scanner(System.in);
	    
	    n1 = entrada.nextInt();
		n2 = entrada.nextInt();
		n3 = entrada.nextInt();
		n4 = entrada.nextInt();
		// Soma os números digitados
		soma = n1 + n2 + n3 + n4;
		// Mostra o resultado da soma
		System.out.println(soma);
		
	}

}
