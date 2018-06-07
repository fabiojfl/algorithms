
/**
 *   
 *   2) Faca um programa que leia um valor do N inteiro e positivo, calcule e mostre o 
 *   valor de E, conforme a formula a seguir:
 *   
 *   E = 1+ 1/1! + 1/2! + 1/3 + ... + 1/N!
 * 
 */

  var num = prompt("Digite um numero inteiro para N: ")
  num = parseInt(num);

  var e = 1;

  for(var i=1; i<=num; i++){
    var fat = 1

    for (var j=1;j<=i;j++){
        fat = fat * j;
        e = e + 1/fat;
    }
  }
  
  console.log("Valor de E = " +e)