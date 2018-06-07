	
/*
 *2) Faca um programa que receba  três notas de um aluno, calcule e mostre 
 * a média aritmética e a menssagem constante na tabela a seguir.
 * 
 * Aos alunos que ficaram para exame, calcule e mostre a nota que deverão 
 * tirar para serem aprovados, considerando que a média exigida é 6,0.
 * 
 * 
 * MEDIA ARITMEICA 				*    MENSSAGEM
 * *********************************************
 * 0.0  x====y      3.0			*	 REPROVADO
 * 3.0	x====y      7.0			*	 EXAME
 * 7.0	x====y      10.0		*	 APROVADO
 ***********************************************
 *
 * x = o número na sua totalidade
 * y = 1 décimo  a menos
 * 
 */

var not1 = prompt("Digite a primeira nota: ")
not1 = parseFloat(not1)

var not2 = prompt("Digite a segunda nota: ")
not2 = parseFloat(not2)

var not3 = prompt("Digite a terceira nota: ")
not3 = parseFloat(not3)

 
var res = (not1 +  not2 + not3) / 3;

if(res <= 10 && res >= 7){

	console.log("(APROVADO) nota: " + res.toFixed(1))

}else if(res < 7 && res > 3){
	
	exige = 12 - res;
	console.log("(EXAME) nota: " + res.toFixed(1) + " É necessário fazer novo exame com uma nota superior a: "+ exige.toFixed(1) +" para aprovação.")

}else if(res <= 3 && res >= 0){
	
	console.log("(REPROVADO) nota: " + res.toFixed(1))

}else {

	console.log("Problemas com a digitação.")

}


