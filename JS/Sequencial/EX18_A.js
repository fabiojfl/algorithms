/**
 * 18) Pedro comprou um saco de ração com o peso em quilos. Ele possui dois gatos, para os quais fornece a quantidade de ração em gramas. 
 * 
 * A quantidade diária de ração fornecida para cada gato é sempre a mesma. 
 * Faça um programa que receba o peso do saco de ração e a quantiddade  de ração fornecida para cada gato, 
 * calcule e mostre quanto restará de ração no saco após cinco dias.
 * 
 */

var peso_saco = prompt("Por favor, digite o peso do saco em KG ")
parseFloat(peso_saco)
var gato1 = prompt("Qual é a quantidade em Gramas para o 1º Gato?")
parseInt(gato1)
var gato2 = prompt("Qual é a quantidade em Gramas para o 2º Gato?")
parseInt(gato2)


conv_kg1 = gato1 / 1000
conv_kg2 = gato2 / 1000

rest_rac = peso_saco - 5 * (conv_kg1 + conv_kg2)


console.log("A qtd de ração que restará no saco após cinco dias:" + rest_rac + " de ração ")