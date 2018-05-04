/**
 * 3.Faca um programa que receba trex notas e seus respectivos pesos, calcule e mostre a media ponderada dessas notas.
 */

confirm("E aê =D Vamos ver se você passou? ")

var nota1 = prompt("Adcione a 1° nota.")
var peso1 = prompt("Qual foi o peso da 1° nota?")

var nota2 = prompt("Adcione a 2° nota.")
var peso2 = prompt("Qual foi o peso da 2° nota?")

var nota3 = prompt("Adcione a 3° nota.")
var peso3 = prompt("Qual foi o peso da 3° nota?")


nota1 = parseFloat(nota1)
peso1 = parseFloat(peso1)

nota2 = parseFloat(nota2)
peso2 = parseFloat(peso2)

nota3 = parseFloat(nota3)
peso3 = parseFloat(peso3)

var resposta = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso3 + peso3) 
resposta = parseFloat(resposta)

console.log("Sua média é : "+ resposta.toPrecision(2))

