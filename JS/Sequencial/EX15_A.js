/**
 * 15) O custo ao consumidor de um carro novo é a soma do preço de fábrica com o percentual de lucro do distribuidor e dos impostos aplicados ao preço 
 * de fábrica. 
 * Faça um programa que receba o preço de fábrica de um veículo, o percentual de lucro do distribuidor e o percentual de impostos, 
 * calcule e mostre: 
 * 
 * a) o valor correspondente ao lucro do distribuidor; 
 * b) o valor correspondente aos impostos; 
 * c) o preço final do veículo.
 * 
 */

var prec_fab  = prompt("Digite o preço de fábrica ")
var perc_dist = prompt("Dugite o lucro do  distribuidor em percentual ")
var perc_imp  = prompt("Digite os impostos acumulados como percentual")

prec_fab  = parseFloat(prec_fab)
perc_dist = parseFloat(perc_dist)
perc_imp  = parseFloat(perc_imp)

var lucr_dist = prec_fab * perc_dist/100;
var tar_imp   = perc_imp * perc_dist/100;

var prec_final = prec_fab + lucr_dist + tar_imp; 

console.log(" Prço do veículo sem tarifas : " +prec_fab.toPrecision())
console.log(" O Lucro do distribuidor: " +lucr_dist.toPrecision())
console.log(" O Percentual do imposto a pagar: " +tar_imp.toPrecision())
console.log(" O preço final do veículo é " +prec_final.toPrecision())