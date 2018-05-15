/**
 * 
 * 22) Sabe-se que o quilowatt de energia custa um quinto do salário mínimo. 
 * Faça um programa que receba o valor do salário mínimo e a quantidade de quilowatts 
 * consumida por uma residência, calcule e mostre:
 *
 * a) o valor de cada quilowatt;
 * b) o valor a ser pago por essa residência;
 * c) o valor a ser pago com o desconto de 15%.
 *  
 */

var sal_min = prompt("Digite o salário mínimo: ")
sal_min = parseFloat(sal_min)
var qtd_kw  = prompt("Digite a quantidade de KWs: ")
qtd_kw  = parseFloat(qtd_kw)

var vlr_kw   = sal_min/5
var pgo_res  = vlr_kw * qtd_kw
var desc     = pgo_res * 15/100
var vlr_pgo = pgo_res - desc

console.log("O valor do Kws "+ vlr_kw) 
console.log("O valor a ser pago na residencia "+ pgo_res)
console.log("O valor a ser pago com 15% de desconto: "+ vlr_pgo) 