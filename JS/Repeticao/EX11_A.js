/** 
 * 
 * 
 * 11) Faça um programa que receba um número inteiro que 1, verifique se o número 
 * fornecido é primo ou não e mostre mensagem de número primo ou de número não primo. 
 * Um número é primo quando é divisível apenas por 1 e por ele mesmo. 
 * 
*/


var num = prompt("Digite um número inteiro para verificar se é primo ou não: ");
num = parseInt(num);
qtde = 0;

for (var i =1; i < num; i++)
{
    if(num%1 == 0){
        qtde =  qtde + 1;
    }
}

if(qtde > 2){
    console.log("O número não é primo ");
} else {
    console.log("O número é primo");
}