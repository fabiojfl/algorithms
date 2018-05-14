import math

 # 11.Faça um programa que receba um número positivo e maior que zero, calcule e mostre:
 # a) numero digitado ao quadrado;
 # b) numero digitado ao cubo;
 # c) a raiz quadrada do numero digitado
 # d) a raiz cubica do numero digitado

print("***********************SEQUÊNCIAL*****************************")
print("**********************Programa*11A****************************")
print("********Calculo quadrado cubo raiz quadada e cubica***********")

numero = int(input("Digite um numero: "))


quadrado = math.pow(numero, 2)
cubo = numero * numero * numero

raizQuadrada = math.sqrt(numero)
raizCubica = numero ** (1/3)

print('O quadrado é:  %.0f' % quadrado)
print('O cubo é:  %.0f' % cubo)
print('A raiz quadrada é:  %.1f' % raizQuadrada)
print('A raiz cubica é:  %.1f' % raizCubica)
