/*
10.faca um programa que calcule e mostre a area de um circulo.
Sabe-se que: Area = pi=Rpontencia de 2
*/

confirm("Calcular a área do circulo")

var raio = prompt("Digite a medida do raio")
raio = parseFloat(raio)

circ = (raio * raio) * 3.14
console.log('A medida do circulo é igual a: '+circ.toFixed(3))


