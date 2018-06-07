/*
 * 6) Uma empresa possiu dez funcionários com as seguintes características: código, número de horas trabalhadas no mês,
 * turno de trabalho (M - matutino, V - vespertino ou N - noturno), categoria (O - operário ou G gerente), valor 
 * da hora trabalhada. Sabendo-se que essa empreasa deseja informar sua folha de pagamento, faça um programa que:
 *
 * a) Leia as informações dos funcionários, exceto o valor da hora trabalhada, não permitindo que sejam informados
 * turnos nem categorias existentes. Trabalhe sempre com a digitação de letras maiúsculas.
 *
 * b) Calcule o valor da hora trabalhada, conforme a tabela a seguir. Adote o valor de R$ 450,00 para o salário mínimo.
 *
 *	CATEGORIA 	*		TURNO		*		VALOR DA HORA TRABALHADA
 *	*******************************************************************
 *		G 		*		   N 		*			18% do salário mínimo
 *		G 		*		 M ou V 	*			15% do salário mínimo
 *		O       *          N        *           13% do salário mínimo
 *		O       *        M ou V 	*		    10% do salário mínimo
 *
 * c) Calcule o salário inicial dos funcionários com base no valor da hora trabalhada e no número de horas
 * trabalhadas.
 *
 * d) Calcule o valor do auxílio-alimentação recebido por funcionário de acordo com seu salário inicial,
 * conforme a tabela a seguir.
 *
 * SALÁRIO INICIAL					*			AUXÍLIO-ALIMENTAÇÃO 
 * *********************************************************************
 *	Até R$300,00                    *   		20% do salário inicial
 *	Entre R$300,00 e R$600,00		*			15% do salário inicial
 *	Acima de R$600,00  				*			5%  do salário inicial
 *
 * e) Mostre o código, número de horas trabalhadas, valor da hora trabalhada, salário inicial, auxílio alimentação e 
 * salário final (salário inicial + auxilio alimentação).
 * 
 * 
*/


//substituir ponto em vírgula
function formatValue(value){
	var str = parseFloat(value).toFixed(2) + "";
	str = str.replace(".",",");
	str = 'R$ '+ str
	return str;
}

for (var i = 0; i < 1; i++){

	cod = prompt("Digite o código do "+i+" funcionário: ");
	cod = parseInt(cod)

	mes_hrs = prompt("Digite a quantidade de horas trabalhadas mês: ");
	mes_hrs = parseInt(mes_hrs);

	alert("Qual é o turno: M - matutino, V - vespertino ou N - noturno \n (Atenção digite apenas letras maiúsculas. )")

	turno = prompt("Digite o Turno: ");

	alert("Qual a categoria do funcionário: O - operário ou G gerente \n (Atenção digite apenas letras maiúsculas. )")
	
	cat = prompt("Digite a categoria: ")

	if (turno != turno.toUpperCase()){
		
		alert("Você digitou o turno do funcionário "+i+" com a letra minuscuala não podemos seguir a operação ")	
	
	} else if(turno != 'M' && turno != 'V' && turno != 'N'){

			alert("Você digitou ,UMA LETRA OU NUMERO DIFERENTES, errado! \n o certo é M - matutino, V - vespertino ou N - noturno \n  para o funcionário "+i+ " Infelizmente, não podemos seguir a operação")	

   	} else  { 

		if(cat != 'O' && cat != 'G'){
			
				alert("Você digitou ,UMA LETRA OU NUMERO DIFERENTES, errado! \n  (O - operário ou G gerente)  \n  para o funcionário "+i+ " Infelizmente, não podemos seguir a operação")

		}else if (cat != cat.toUpperCase()){
		
			alert("Você digitou a categoria do funcionário "+i+" com a letra minuscuala não podemos seguir a operação "); 	

		} else {

				sal_min = 450.00;

				if(cat == 'G' && turno == 'N'){

					hora_trabalhada_gerente_noturno = sal_min + sal_min * 18/100;
					sal_inicial = hora_trabalhada_gerente_noturno * mes_hrs;

					if (sal_inicial <= 300) {
					
						aux_alimentacao = sal_inicial * 20/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 20% do salário inicial " + formatValue(aux_alimentacao));

					} else if(sal_inicial > 300 && sal_inicial <= 600){

						aux_alimentacao = sal_inicial * 15/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 15% do salário inicial " + formatValue(aux_alimentacao));	

					} else {

						aux_alimentacao = sal_inicial * 5/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 5% do salário inicial " + formatValue(aux_alimentacao));
					}

					console.log('O salário do Gerente Noturno: '+formatValue(hora_trabalhada_gerente_noturno)+' com 18% do salário mínimo');
					console.log('O salário inicial do Gerente Noturno: '+ formatValue(sal_inicial));

				} else if( cat == 'G' && turno == 'M' || turno == 'V'){

					if (sal_inicial <= 300) {
					
						aux_alimentacao = sal_inicial * 20/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 20% do salário inicial " + formatValue(aux_alimentacao));

					} else if(sal_inicial > 300 && sal_inicial <= 600){

						aux_alimentacao = sal_inicial * 15/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 15% do salário inicial " + formatValue(aux_alimentacao));	

					} else {

						aux_alimentacao = sal_inicial * 5/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 5% do salário inicial " + formatValue(aux_alimentacao));
					}
					
					hora_trabalhada_gerente_diurno = sal_min + sal_min * 15/100;
					sal_inicial = hora_trabalhada_gerente_diurno * mes_hrs;
					

					console.log('O salário do Gerente Diurno: '+formatValue(hora_trabalhada_gerente_diurno)+' com 15% do salário mínimo');
					console.log('O salário inicial do Gerente Diurno: '+ formatValue(sal_inicial));

				} else if(cat == 'O' && turno == 'N'){
					
					hora_trabalhada_operario_noturno = sal_min + sal_min * 13/100;
					sal_inicial = hora_trabalhada_operario_noturno * mes_hrs;

					if (sal_inicial <= 300) {
					
						aux_alimentacao = sal_inicial * 20/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 20% do salário inicial " + formatValue(aux_alimentacao));

					} else if(sal_inicial > 300 && sal_inicial <= 600){

						aux_alimentacao = sal_inicial * 15/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 15% do salário inicial " + formatValue(aux_alimentacao));	

					} else {

						aux_alimentacao = sal_inicial * 5/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 5% do salário inicial " + formatValue(aux_alimentacao));
					}


				
					console.log('O salário do Operário Noturno: '+formatValue(hora_trabalhada_operario_noturno)+' com 13% do salário mínimo');
					console.log('O salário inicial do Operário Noturno: '+ formatValue(sal_inicial));

				} else if( cat == 'O' && turno == 'M' || turno == 'V'){

					if (sal_inicial < 300) {
					
						aux_alimentacao = sal_inicial * 20/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 20% do salário inicial " + formatValue(aux_alimentacao));

					} else if(sal_inicial > 300 && sal_inicial <= 600){

						aux_alimentacao = sal_inicial * 15/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 15% do salário inicial " + formatValue(aux_alimentacao));	

					} else {

						aux_alimentacao = sal_inicial * 5/100; 
						console.log("O AUXÍLIO-ALIMENTAÇÃO 5% do salário inicial " + formatValue(aux_alimentacao));
					}

					hora_trabalhada_operario_diurno = sal_min + sal_min * 10/100;
					sal_inicial = hora_trabalhada_operario_diurno * mes_hrs;
					console.log('O salário do Operário Diurno: '+formatValue(hora_trabalhada_operario_diurno)+' com 10% do salário mínimo');
					console.log('O salário inicial do Operário Diurno: '+ formatValue(sal_inicial));

				} else {

					console.log('OPS')
				
				}
			}
				
				console.log(cat+ " - " +turno)
		}
	} 


