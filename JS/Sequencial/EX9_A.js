/*
9.faca um programa que calcule e mostre a area de um triangulo.Sabe-se 
que: Area = (base*altura)/2
*/

confirm("Quer calcular a area do triangulo?")
var base = prompt("Digite a base")
var altura = prompt("Digite a altura")

base = parseInt(base)
altura = parseInt(altura)

var area =(base * altura)/2

console.log("O calculo da area do tringangulo é "+ area)