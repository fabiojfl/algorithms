/**
 	13. Sabe_se que:

	1 pe = 12 polegadas
	1 jarda = 3 pes
	1 milha = 1760 jardas

	Faça um programa que receba a medida em pés, faca as conversoes a seguir e mostre os resultados.

	a) polegadas
	b) jardas
	c) milhas.

 */

alert("Calculando uma medida em pes, com valores definidos, que converte esses valores em jardas e milhas. \n 1 pe = 12 polegadas\n 1 jarda = 3 pes\n 1 milha = 1760 jardas")

var pes = prompt("Digite a medida em pés")

pes = parseFloat(pes)

polegadas = pes * 12;
jardas = pes / 3;
milhas = jardas / 1760;
		
console.log("Medida em polegadas = "+polegadas);
console.log("Medida em jardas = "+jardas);
console.log("Medida em milhas = "+milhas);