/*
 *
 * 21)Uma pessoa deseja pregar um quadro na parede. 
 * Faça um programa para calcular e mostrar a que distância a escada deve estar na parede. 
 * A pessoa deve fornecer o tamanho da escada e a altura em que se deseja pregar o quadro.
 * 
 * 		++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *  	Lembre-se de que o tamanho da escada deve ser maior que a altura que se deseja alcançar
 * 	 	++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
	*
	*	*
	*		*	Medida da escada
	*			*
	*				*						x - Altura em que deseja pregar o quadro
	*					*
	*					*	*				y - Distância em que deverá ficar a escada
	*				a)	*		*
	*	*	*	*	*	*	*	*	* 		Z - Tamanho da escada 
	
	Distância que a escada está da parede

 * 
 */

		var z = prompt("Qual é o tamanho da escada ")
		z = parseFloat(z)

		var x = prompt("Qual a altura que deja pregar o quadro?")
		x = parseFloat(x)

		y = Math.pow(z, 2) - Math.pow(x, 2)
		y = Math.sqrt(y)
		
		console.log("É preciso a distancia de: "+ y.toFixed(2))
