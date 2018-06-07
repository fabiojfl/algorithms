/**
 * 19) Cada degrau de uma escada tem X de altura. 
 * Faça um progrma que receba sua altura e a altura que o usuário deseja alcançar subindo a escada, 
 * calcule e mostre quantos degraus ele deverá subir para atingir seu objetivo, sem se preocupar com a altura do usuário. 
 * Todas as medidas fornecidas devem estar em metros. 
 */

var degr_h = prompt("Digite a altura do degrau ")
degr_h = parseFloat(degr_h) 
var us_h = prompt("Digite a altura ")
us_h = parseFloat(us_h)

var qtd_degraus = degr_h / us_h

console.log("A quantidade de degraus: "+qtd_degraus)