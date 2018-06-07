/**
 * 
 * 20) Faça um programa que receba a medida do ângulo formado por uma escada apoiada no chão
 * e encostada na parede e a altura da parede onde está a ponta da escada, 
 * calcule e mostre a medida desta escada.
 * 
 */

		var angulo = prompt("Digite o ângulo como graus ")
		angulo = parseFloat(angulo)

		var altura = prompt("Digite a ponta da escada contando com a altura da parede:")
		altura = parseFloat(altura)
		
		var radiano = angulo * 3.14 / 180;
		
		var escada = altura / Math.sin(radiano);
		
		console.log("O comprimento da escada é "+ escada.toFixed(2))
