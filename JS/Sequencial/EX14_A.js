/**
 * 14) faca um programa que receba o nome de nascimento de uma pessoa e o  ano atual, calcule  e mostre: 
 * 
 * a) a idade dessa pessoa; 
 * b) quantos anos essa pessoa terá em 2005.
 * 
 */

alert("Quantos anos você tem. \n Quantos anos você terá em 2050")

var ano_nasc = prompt("Em que ano você nasceu?")
ano_nasc = parseInt(ano_nasc)
var ano_atual = prompt("Qual o ano atual?")
ano_atual = parseInt(ano_atual)


var idade = ano_atual - ano_nasc;
var id_2050 = 2050 - ano_nasc;

console.log("Você tem "+ idade + " anos e você terá em 2050:  " + id_2050+ " anos. ")
