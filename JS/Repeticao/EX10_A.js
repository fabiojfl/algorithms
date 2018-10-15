/**
 * 
 * 10) Em um campeonato de futebol existem cinco times e cada time possui onze jogadores.
 * 
 * Faça um programa que receba a idade, o peso e a altura de cada um dos jogadores calcule e mostre:
 * 
 * -> a quantidade de jogadores com a idade inferior a 18 anos;
 * -> a media das idades dos jogadores de cada time;
 * -> a media de alturas de todos os jogadores de cada time;
 * -> a medida das alturas de todos os jogadores do campeonato;
 * -> a percentagem de jogadores com mais de de 80 quilos entre todos os jogadores do campeonato.
 * 
 *  
*/

var media_altura = 0;
var total80 = 0;

	for (var cont_time = 1; cont_time <= 2; cont_time++)
	{	
		var media_idade = 0;

		for (var cont = 0; cont <= 3; cont++)
		{
			
			
			var idade  = prompt("adcione a idade");
			var altura = prompt("Qual a altura do jogador");
			var peso   = prompt("Qual a peso do jogador ");

			if (idade >= 18){
				var qtde = qtde + 1;
				media_idade = media_idade + idade;	
				media_altura =  media_altura + altura;
			}

			if(peso >= 80){
				var total80 = total80 + 1;
				
			}

		}

	media_idade = media_idade/2;
	console.log("Media da idade "+ media_idade);
	}

media_altura = media_altura/2;
console.log("Media da altura "+ media_altura);

var porc = total80 * 100/4;
console.log("Porcentagem de jogadores com peso superior a 80 Kg "+porc+ "% ");	
