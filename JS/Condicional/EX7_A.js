/*
 *
 *  7)faca um programa que receba quatro valores, I, A, B e C. 
 *  I é um valor inteiro e positivo e 
 *  A e B e C são valores reais. 
 *  
 *  Escreva os numeros A,B e C obedecendo a tabela a seguir.
 *  
 *  Supor que o valor digitado para I seja sempre um valor valido.
 *  
 *  Ou seja 1,2 ou 3.
 *  
 *  VALOR DE I 			FORMA A ESCREVER
 *  1				A,B e C em 
 *  2				A,B e C em ordem decrescente 				
 *  3				O maior fica entre os outros numeros.
 *  
*/



var A = prompt("Digite um valor para A: ");
var B = prompt("Digite um valor para B: ");
var C = prompt("Digite um valor para C: ");

var I = prompt("Digite um valor para I: \n 1 Ordem crescente; \n 2 Ordem decrescente; \n 3 Mostra o maior número entre os demais. ");

I = parseInt(I);


	if (I == parseInt(I))
	{
	

		if (I==1)
  		{
    		if (A<B && A<C)
       		  {
       		  	if (B<C)
	  			 console.log("A ordem crescente dos números é: " + A + " - " + B + " - " + C);
       			else
	  			 console.log("A ordem crescente dos números é: " + A + " - " + C + " - " + B);
	  		  }	 
    		if (B<A && B<C)
			  {
			  	if (A<C)
	  			 console.log("A ordem crescente dos números é: " + B + " - " + A + " - " + C);
       			else
	  			 console.log("A ordem crescente dos números é: " + B + " - " + C + " - " + A);
	  		  }	 
    		if (C<A && C<B)
    		  {
    		    if (A<B)
	  			 console.log("A ordem crescente dos números é: " + C + " - " + A + " - " + B);
       			else
	  			 console.log("A ordem crescente dos números é: " + C + " - " + B + " - " + A);
  			  }
  	 	}		  

	
				//Se I for igual a 2 determina e mostra a ordem decrescente dos números
 		if (I==2)
  		{
    	if (A>B && A>C)
       		  {
       		  	if (B>C)
	  			console.log("A ordem decrescente dos números é: " + A + " - " + B + " - " + C);
       			else
	  			console.log("A ordem decrescente dos números é: " + A + " - " + C + " - " + B);
	  		  }	 
    		if (B>A && B>C)
			  {
			  	if (A>C)
	  			console.log("A ordem decrescente dos números é: " + B + " - " + A + " - " + C);
       			else
	  			console.log("A ordem decrescente dos números é: " + B + " - " + C + " - " + A);
	  		  }	 
    		if (C>A && C>B)
    		  {
    		    if (A>B)
	  			console.log("A ordem decrescente dos números é: " + C + " - " + A + " - " + B);
       			else
	  			console.log("A ordem decrescente dos números é: " + C + " - " + B + " - " + A);
  			  }
    	}
  		//Se I for igual a 3 mostra o maior número entre os demais
 		if (I==3)
  		{
	    	if (A>B && A>C)
	       	console.log("A ordem desejada é: " + B + " - " + A + " - " + C);
	    	if (B>A && B>C)
	       	console.log("A ordem desejada é: " + A + " - " + B + " - " + C);
	    	if (C>A && C>B)
	       	console.log("A ordem desejada é: " + A + " - " + C + " - " + B);
  		}

	} else {

		console.log("Valor  invalido digite apenas o valor 1, 2 e 3 para as alternativas.");
	
	}




