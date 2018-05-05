/**
 * 7.faca um programa que receba o salario-base de um funcionario, calcule e mostre o
 *  seu salario a receber, sabendo-se que esse funcionario tem gratificacao de R$ 50,00 e 
 *  paga imposto de 10% sobre o salario base.
 */

var salario_base = prompt("Adicione o salario base e veja um acrescimo de R$50,00 e o imposto de 10%")


salario_base = parseFloat(salario_base)

grat = 50
imp = salario_base * 10/100

var calc_grat = salario_base + grat
var calc_imp = salario_base - imp

var salario_atual = salario_base + grat - imp;

console.log("Gratificação calculada: "+ calc_grat)
console.log("Imposto calculado: "+ calc_imp)
console.log("O Salario atual é: "+ salario_atual)

