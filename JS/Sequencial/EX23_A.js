/**
 * 
 *23) Faça um programa que receba o numero real calcule e mostre:
 * 
 * a) A parte inteira desse número;
 * b) A parte fracionária desse número;
 * c) O arredondamento desse número.
 *  
 */

	
var num = prompt("Digite um número real: ")
num  = parseFloat(num)

var integer = parseInt(num)
var fraction = num - integer
var round = Math.ceil(num) 

console.log("A parte inteira desse número: " + integer)
console.log("A parte fracionária desse número: "+ fraction.toFixed(8))
console.log("O arredondamento desse número: " + round)	