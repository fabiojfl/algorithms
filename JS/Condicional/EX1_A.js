	
/*
 *
 *1)  A nota final de um estudante é calculada a partir de três notas atribuídas respectivamente a um 
 * trabalho de laboratório, a uma avaliação de um exame Final. 
 * A média dos três notas mencionadas anteriormente obedece aos pesosa seguir:
 * 
 * NOTA								PESO
 * 
 * Trabalho de laboratório			2	
 * Avalicao Semestral				3
 * Exame final						5
 * 
 * Faca um programa que receba as três notas, calcule e mostre a media ponderada
 * o conceito que segue a tabela abaixo:
 * 
 * MEDIA PONDERADA			CONCEITO
 * 
 * 8.0       10.0			   A
 * 7.0        8.0			   B
 * 6.0        7.0			   C	
 * 5.0        6.0			   D
 * 0.0        5.0			   E
 *
 *
 */

var trab_lab  = prompt("Digite a nota do Trabalho de laboratório: ")
trab_lab      = parseFloat(trab_lab)

var aval_sem  = prompt("Digite a nota da Avalicao Semestral")
aval_sem      = parseFloat(aval_sem)

var exam_final = prompt("Digite a nota do Exame final")
exam_final     = parseFloat(exam_final)

med = (trab_lab * 2 + aval_sem * 3 + exam_final * 5) / 10 

if(med <= 10 && med > 8){

	console.log("NOTA "+ med +" Conceito A")

} else if(med <= 8 && med > 7){

	console.log("NOTA "+ med +" Conceito B")

} else if(med <= 7 && med > 6){

	console.log("NOTA "+ med +" Conceito C")

}else if(med <= 6 && med > 5){

	console.log("NOTA "+ med +" Conceito D")

}else if(med <= 5 && med > 0){

	console.log("NOTA "+ med +" Conceito E: E UM ABRAÇO =)")

} else{
	
	console.log("Ops! Já sabe né =)")	
}


