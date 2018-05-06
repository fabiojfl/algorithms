#10.faca um programa que calcule e mostre a area de um circulo.
# Sabe-se que: Area = pi=Rpontencia de 2
# 49085.938
import math

print("***********************SEQUÊNCIAL*****************************")
print("**********************Programa*10B****************************")
print("***************Calculo da area do Circulo*********************")

raio =  float(input("Qual a media do raio: "))

area = math.pi * (raio * raio)
print('O tamanho do circulo é: %5.3f' % area)