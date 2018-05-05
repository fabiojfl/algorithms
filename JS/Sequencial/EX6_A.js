/**
 * 6. faça um programa que receba o salario-base de um funcionario, calcule e mostre o salario a receber, sabendo-se que esse funcionario 
 * em gratificação de 5% sobre o salario base e paga imposto de 7% sobre o salario-base.
 */

confirm("Calcular salario base com 5% de  gratificação e 7% de imposto ")

var sal_base = prompt("Adicione o salário")
sal_base = parseFloat(sal_base)

var imp = sal_base * 7/100;
var grat = sal_base * 5/100;

sal_atual = sal_base + grat - imp

console.log("O calculo do imposto sobre o salario é: "+ imp +" - "+ sal_base)
console.log("O calculo da gratificação sobre o salario é:  "+ grat +" + "+ sal_base)

console.log("O salario atual é: "+ sal_atual)
