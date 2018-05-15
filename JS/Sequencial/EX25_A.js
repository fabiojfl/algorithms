/*
 * 
 * 25) Faça um programa que receba o custo de um espetáculo teatral e o preço do convite desse espetáculo. 
 * Esse programa deverá calcular e mostrar a quantidade de convites que devem ser vendidos 
 * para que pelo menos o custo do espetáculo seja alcançado.
 * 
 */

var custo_espetaculo = prompt("Qual é o custo do Espetáculo")
    custo_espetaculo = parseFloat(custo_espetaculo)

var valor_ingresso = prompt("Qual é o valor do Ingresso")
	valor_ingresso = parseFloat(valor_ingresso)

var qtd_ingresso = custo_espetaculo / valor_ingresso;

	console.log("Serão necessários: "+Math.round(qtd_ingresso) + " ingressos para cobrir esse envento.")
	