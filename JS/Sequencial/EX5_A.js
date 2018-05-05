/*
	5.faca um programa que receba o salario de um funcionario e o percentual de aumento,calcule e mostre o aumento do salario.
*/

confirm("Calculo do salario e o seu percentual")

var salario_base = prompt(" Adcione o salario ")
var percentual = prompt("Adicione o pecentual. Ex: 10 significa 10% ")

salario_base = parseFloat(salario_base)
percentual = parseInt(percentual)

resultado = salario_base + salario_base * percentual/100

console.log("O valor do salario atual é R$: "+ resultado)