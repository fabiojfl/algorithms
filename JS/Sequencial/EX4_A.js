/*
4.Faca um programa que receba o salario de um funcionario, calcule e mostre o novo salario, sabendo-se que este sofreu um aumento de 25%.
*/

confirm("Verificação do aumento de 25% do salário")

var salario = prompt("Digite o salario atual ")

salario = parseFloat(salario)
var reajuste = salario + (salario * 25/100)
reajuste = parseFloat(reajuste)


console.log("O reajuste será de: "+reajuste.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))