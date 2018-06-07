
/**
 * 4) Foi feita uma estatística em cinco cidades brasileiras para coletar dados 
 * sobre acidentes de trânsito. 
 * 
 * Foram obtidos os seguintes dados:
 * 
 * a) código da cidade;
 * b) número de veículos de passeio (em 2007)
 * c) número de acidentes de trânsito com vítimas (em 2007).
 * 
 * Deseja-se saber:
 * 
 * a) qual o maior e menor índice de acidentes de trânsito e a que cidades pertencem;
 * b) qual a média de veículos nas cinco cidades juntas;
 * c) qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.
 * 
 */

	var maior = 0;
	var menor = 0;
	var cidade_maior = 0;
	var cidade_menor = 0;
	var soma_acidentes = 0;
	var contador_acidentes =0;

	for (i = 1; i <= 5; i++){
	 
	 var codigo_cidade = prompt("Digite o código da cidade: " + i);
	 codigo_cidade = parseInt(codigo_cidade);
	 var num_veiculos  = prompt("Digite o número de veículos de passeio (em 2007) da cidade: " + i);
	 num_veiculos = parseInt(num_veiculos);
	 var num_acidentes = prompt("Digite o número de acidentes de trânsito com vítimas (em 2007) da cidade: " + i);
	 num_acidentes = parseInt(num_acidentes);
	
		if(i == 1){

		maior = num_acidentes;
		menor = num_acidentes;
		cidade_maior = codigo_cidade;
		cidade_menor = codigo_cidade;

		}else{

			if (maior < num_acidentes){
				maior = num_acidentes;
				cidade_maior = codigo_cidade;
			}

			if(menor > num_acidentes ){
				menor = num_acidentes;
				cidade_menor = codigo_cidade;
			} 
		}

		if(num_veiculos < 2000 ){

			soma_acidentes = soma_acidentes + num_acidentes;
			contador_acidentes = contador_acidentes + 1;
		} 
	}	

	console.log("O maior índice de acidente de trânsito é "+ maior +"  e pertence a cidade:  "+ cidade_maior)	
	console.log("O menor índice de acidente de trânsito é "+ menor +"  e pertence a cidade:  "+ cidade_menor)	

	med_veic = num_veiculos/5;	
	console.log("A média de veículos das cinco cidades: "+ med_veic)	

	if (contador_acidentes == 0)

		console.log("Nenhuma cidade com menos de 2000 veículos com acidentes");

	else{

		var media_acidentes = soma_acidentes/contador_acidentes;
		console.log("Média de acidentes nas cidades com menos de 2000 veículos = "+ media_acidentes);

	}
	
