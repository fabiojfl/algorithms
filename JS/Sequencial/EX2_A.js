

/* 2.Faca um programa que receba tres notas, calcule e mostre a media aritmetica entre elas. */


alert("Quer calcular a media aritimetica das ultimas 3 notas ?")

var med1 = prompt("Digite a primeira média")
var med2 = prompt("Digite a segunda média")
var med3 = prompt("Digite a terceira média")

med1 = parseFloat(med1)
med2 = parseFloat(med2)
med3 = parseFloat(med3)

var res = (med1 + med2 + med3) / 3;

res = parseFloat(res)

console.log("o calculo das tres medias são: "+ res.toPrecision(2))