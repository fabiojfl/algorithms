/*
 * 
 * 24) Faça um programa que receba uma hora formada por hora e minutos(um número real),
 * calcule e mostre a hora digitada apenas em minutos.
 * Lembre-se de que:
 * 
 * -> para quatro e meia, deve-se digitar 4,30;
 * -> os minutos de 0 a 59;
 *
 */
	
var tempo = prompt("Digite as horas e minutos com formato de número real (Ex: 5,30) para: \nObter a conversão de horas e minutos em minutos")
//horas  = parseFloat(horas)

	var horas = parseInt(tempo)
	var min = tempo - horas

	console.log(min)

