/**
 * 9) Faça um programa que receba duas notas de seis alunos, calcule e mostre:
 * 
 * + a média aritimética das duas notas de cada aluno;
 * + a menssagem que está na tabela a seguiir:
 * 
 * MÉDIA 	ARITIMÉTICA  		MENSSAGEM
 * 
 * ATÉ 			3               REPROVADO
 * ENTRE 		3 E 7         	EXAME
 * DE 			7 PARA CIMA     APROVADO 
 *
 * 
 * + O Total de alunos reprovados
 * + O Total de alunos de exame
 * + O Total de alunos reprovados
 * + A Média da classe
 * 
 *  
*/


var totalReprovados = 0;
var totalExames = 0;
var totalAprovados = 0;
var totalClasse = 0;
var medClasse = 0;

for (var i = 1; i<=6; i++){

	var not = prompt("Adicione a primeira nota")
	var not2 = prompt("Adicione a segunda nota")

	not = parseFloat(not)
	not2 = parseFloat(not2)
	
	var med = (not + not2)/2;
	console.log("Média do "+i+"º aluno = "+med);

	if (med <= 3){

		totalReprovados = totalReprovados + 1;
		console.log("REPROVADO")

	 } else if(med > 3 && med <= 7 ){

	 	totalExames = totalExames + 1;
	 	console.log("EXAME")
	 
	 } else if(med > 7 && med <= 10) {

	 	totalAprovados = totalAprovados + 1;
	 	console.log("APROVADO")

	 } else {
	 	
	 	console.log("OPS, PROBLEMAS.")
	 
	 }

	 totalClasse = totalClasse + med;
}

medClasse = totalClasse/6;

console.log("Média da classe "+ medClasse)
console.log("Total dos reprovados "+ totalReprovados)
console.log("Total dos exames "+ totalExames)
console.log("Total dos aprovados "+ totalAprovados)

