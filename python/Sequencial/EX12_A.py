#12.faca um programa que receba dois numeros maiores que zero, calcule e mostre um elevado ao outro.

import math;

print("***********************SEQUÊNCIAL*****************************")
print("**********************Programa*12A****************************")
print("*************Dois numeros elevados um ao outro****************")

num1 = float(input("Digite o primeiro numero: "))
num2 = float(input("Digite o segundo numero: "))

rs1 = math.pow(num1, num2)
rs2 = math.pow(num2, num1)

print('Resposta 1: {0}  | Resposta 2: {1}'.format(rs1, rs2))

