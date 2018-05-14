/**
 * 
 * 17) Um trabalhador recebeu seu salário e o depositou em sua conta bancária. 
 * Esse trabalhador emitiu dois cheques e agora deseja saber o seu saldo atual. 
 * Sabe-se que cada operacão bancária de retirada  paga CPMF de 0,38% e o salario inicial da conta esta zerado.
 * 
 */

var dep = prompt("QUAL O VALOR DO DEPOSITO ")
parseFloat(dep)

var chq1 = prompt("Qual o valor do primeiro cheque?")
parseFloat(chq1)
var chq2 = prompt("Qual o valor do segundo cheque?")
parseFloat(chq2)

var saq1 = dep - chq1;
var saq2 = saq1 - chq2;

var opr1 = chq1 * 0.38/100
var opr2 = chq2 * 0.38/100

var total_cpmf = opr1 - opr2
var saldo = dep - chq1 -chq2 - opr1 - opr2; 
var rest = dep - saldo

console.log(" ( + ) Deoósito : "+ dep)
console.log(" ( - ) Saque do cheque 1: "+ chq1 + " Saldo a meneos "+saq1+ "(-CPMF) "+ opr1)
console.log(" ( - ) Saque do cheque 2: "+ chq2 + " Saldo a meneos "+saq2+ "(-CPMF) "+ opr2)
console.log(" ( - ) Impostos TOTAL CPMF: " + total_cpmf)
console.log(" ( + ) Saldo atual com impostos: "+ saldo)
console.log(" Salado restante: "+ rest)