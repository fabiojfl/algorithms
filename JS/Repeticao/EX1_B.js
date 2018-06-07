
/**
  * 
  * 1) Um funcionário de uma empresa recebe aumento salarial anualmente. 
  * Sabe-se que:
  * 
  * A) Esse funcionário foi contratado em 1995 com o salario inicial de R$1000.00;
  * B) Em 2006 recebeu aumento de 1.5% sobre o salario inicial;
  * c) a partir de 2007 (inclusive), os aumentos salariais de sempre corresponderem
  * ao dobro do percentual do ano anterior.
  * 
  * Faça um programa que determine o salário atual desse funcionario.
  * 
  */


var ano_atual = prompt("Digite o ano atual: ");
ano_atual = parseInt(ano_atual);

var i = 2007;
var sal = 1000;
var perc = 1.5/100;
var sal_atual = sal + perc * sal;

  for(i; i<= ano_atual; i++){
    console.log(i)
      perc = 2 * perc;
      sal_atual = sal_atual + perc * sal;    
  }

console.log("O salário atual é: R$ "+sal_atual.toFixed(2))