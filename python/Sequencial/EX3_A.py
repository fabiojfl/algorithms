#3.Faca um programa que receba trex notas e seus respectivos pesos, calcule e mostre a media ponderada dessas notas.

print("********************SEQUENCIAL*************************")
print("********************Programa*3*************************")
print("*********Cálculo da média aritmética com peso *********")
print("*******************************************************")
peso1_typed = input("Qual o peso da primeira nota?")
nota1_typed = input("Qual é o nota do peso anterior ?")

peso2_typed = input("Qual o peso da segunda nota?")
nota2_typed = input("Qual é o nota do peso anterior")

peso3_typed = input("Qual o peso da terceira nota?")
nota3_typed = input("Qual é o nota do peso anterior")

resposta_typed = (float(nota1_typed) * float(peso1_typed) + float(nota2_typed) * float(peso2_typed) + float(nota3_typed) * float(peso3_typed)) / (float(peso1_typed) + float(peso2_typed) +float( peso3_typed))

print("Sua média final é: %s " % format(float(resposta_typed), ".1f"))
