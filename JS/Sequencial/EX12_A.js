/**
 * 12.faca um programa que receba dois numeros maiores que zero, calcule e mostre um elevado ao outro.
 */

alert("Calculando um numero elevado a outro ")
var numero1 = prompt("Digite o primeiro numero")
var numero2 = prompt("Digite o segundo numero")

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

var resposta1 = Math.pow(numero1, numero2)
var resposta2 = Math.pow(numero2, numero1)

console.log("Reposta 1: "+ resposta1 +" | "+ "Reposta 2: "+ resposta2)