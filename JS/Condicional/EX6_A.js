/*
 *	6) faca um programa que receba um numero inteiro e verifique se esse numero e par ou impar. 
*/


num = parseInt(prompt("Digite um número para revelar se é par ou impar"));

resultado = num % 2;

if (resultado == 0){
	console.log("O número digitado é par: "+ num)
}

if (resultado != 0){
	console.log("O número digitado é impar: "+ num)
}


