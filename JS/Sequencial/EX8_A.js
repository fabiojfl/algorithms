/*
8. Faça um programa que receba o valor de um depósito e o valor da taxa de juros, calcule e mostre o
valor do rendimento e o valor total depois do rendimento.
*/

var vlr_deposito = prompt("Digite o valor do depóstio")
var vlr_tx = prompt("Digite o valor da taxa de juros. Ex 10 é igual a 10%")

vlr_deposito = parseFloat(vlr_deposito)
vlr_tx = parseInt(vlr_tx)

var vlr_rendimento = vlr_deposito * vlr_tx/100
var vlr_total = vlr_rendimento + vlr_deposito

vlr_rendimento = parseFloat(vlr_rendimento)


console.log("O valor do rendimento é "+ vlr_rendimento.toFixed(2)+" | "+"O valor total do depósito é: "+ vlr_total.toFixed(2))