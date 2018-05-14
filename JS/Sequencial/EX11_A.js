/**
 * 
 * 11.Faça um programa que receba um número positivo e maior que zero, calcule e mostre:
 * 
 *  a) numero digitado ao quadrado;
 *  b) numero digitado ao cubo;
 *  c) a raiz quadrada do numero digitado
 *  d) a raiz cubica do numero digitado 
 *  
 */

var numero = prompt("Digite um número maior que 0")

numero = parseInt(numero)

var quadrado = Math.pow(numero, 2)
var cubo = Math.pow(numero, 3)
var raizQuadrada = Math.sqrt(numero) 
var raizCubica =Math.cbrt(numero)

console.log(quadrado)
console.log(cubo)

console.log(raizQuadrada)
console.log(raizCubica)
