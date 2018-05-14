/**
 * 
 * 16) Faça um programa que receba o numero de horas trabalhadas e o valor do salario mínimo. 
 * Calcule e mostre o salario a receber seguindo as  regras:
 * 
 * a) a hora trabalhada vale a metade do salario mínimo.
 * b) o salario bruto equivale ao numero  de horas trabalhadas multiplicando pelo valor da hora trabalhada.
 * c) o imposto equivale  a 3% so salário bruto.
 * d) o salário a receber equivale ao salário bruto menos o imposto.
 * 
 */

var num_hrs = prompt("Qual o número de horas trabalhadas?")
var vlr_sal_min = prompt("Qual é o valor do salário mínimo?")

num_hrs = parseFloat(num_hrs)
vlr_sal_min = parseFloat(vlr_sal_min)

var vlr_hrs_trab = vlr_sal_min/2
var sal_bruto = num_hrs * vlr_hrs_trab
var imp = sal_bruto * 3/100;
var sal_receber = sal_bruto - imp

console.log("O valor da hora trabalhada R$ "+ vlr_hrs_trab.toPrecision())
console.log("O salário bruto R$ "+sal_bruto.toPrecision())
console.log("O salário bruto equivalente a 3% de imposto R$ "+ imp.toPrecision())
console.log("O salário a receber: R$ "+ sal_receber.toPrecision())