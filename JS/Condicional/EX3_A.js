	
/*
 * 3) Faça um programa que receba dois números e mostre o maior
 * 
 */

var num1 = prompt("Digite o primeiro número")
   num1 = parseInt(num1)

var num2 = prompt("Digite o primeiro número")
   num2 = parseInt(num2)   

if(num1 > num2){

	console.log(num1+" O primeiro número é maior que o segundo número digitado "+num2)

}else if(num2 > num1){

	console.log(num2+" O segundo número é maior que o primeiro número digitado "+num1)

} else if(num2 == num1){

	console.log("O dois números digitado são iguais "+ num1 + " e "+ num2)	

}else{
	
	console.log("Ops! Alguma coisa deu errado =(")	
}

