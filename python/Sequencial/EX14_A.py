# 14) Faça um programa que receba o ano de nascimento de uma pessoa e o  ano atual, calcule  e mostre:
# a) a idade dessa pessoa;
# b) quantos anos essa pessoa terá em 2050.

print("***********************SEQUÊNCIAL*****************************")
print("**********************Programa*14A****************************")
print("*******Quantos anos você terá em 2050 =) *********************")

ano_nasc = int(input("Qual o ano do nascimento? "))
ano_atual = int(input("Qual é o ano atual? "))

id_2050 = 2050 - ano_nasc;
idade = ano_atual - ano_nasc;

print("A idade autal é: {0} | Em 2050 essa pessoa terá: {1} ".format(idade, id_2050))