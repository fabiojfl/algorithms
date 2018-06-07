/*
 *	 4)Faça um programa que receba três números e os mostre em ordem crescente.
 */

var num1 = prompt("Adicione o primeiro número: ");
num1 = parseInt(num1);

var num2 = prompt("Adicione o segundo número: ");
num2 = parseInt(num2);

var num3 = prompt("Adicione o terceiro número: ");
num3 = parseInt(num3);

if (num1 < num2 && num1 < num3)
{
	if (num2 < num3)
		console.log("A ordem crescente dos números é: " + num1 + " - " + num2 + " - " + num3);
	if (num3 < num2)	
		console.log("A ordem crescente dos números é: " + num1 + " - " + num3 + " - " + num2);
} 

if (num2 < num1 && num2 < num3)
{
	if (num1 < num3)
		console.log("A ordem crescente dos números é: " + num2 + " - " + num1 + " - " + num3);
	if (num3 < num1)	
		console.log("A ordem crescente dos números é: " + num2 + " - " + num3 + " - " + num1);
}   

if (num3 < num1 && num3 < num2)
{
	if (num1 < num2)
		console.log("A ordem crescente dos números é: " + num3 + " - " + num1 + " - " + num2);
	if (num2 < num1)	
		console.log("A ordem crescente dos números é: " + num3 + " - " + num2 + " - " + num1);	
}