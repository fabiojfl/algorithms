/*
 *	 5) faca um programa que receba 3 numeros obrigatoriamente em ordem crescente e um quarto numero que nao siga esta regra. Mostre, em 
 *	 seguida, os quatro numeros em ordem decrescente.
 */


 	alert("Por favor, preencha 4 numeros na oredem crescente");

	var num1 = prompt("Digite o primeiro número")
	var num2 = prompt("Digite o segundo número")
	var num3 = prompt("Digite o terceiro número")
	var num4 = prompt("Digite o quarto número")


num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

num4 = parseInt(num4);


	if (num4 > num3)
   		console.log("A ordem decrescente dos números é: "+num4+" - "+num3+" - "+num2+" - "+num1);
		if (num4 > num2 && num4 < num3)
   		console.log("A ordem decrescente dos números é: "+num3+" - "+num4+" - "+num2+" - "+num1);
		if (num4 > num1 && num4 < num2)
   		console.log("A ordem decrescente dos números é: "+num3+" - "+num2+" - "+num4+" - "+num1);
		if (num4 < num1)
		console.log("A ordem decrescente dos números é: "+num3+" - "+num2+" - "+num1+" - "+num4);
