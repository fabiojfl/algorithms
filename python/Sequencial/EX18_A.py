#18) Pedro comprou um saco de ração com o peso em quilos.
# Ele possui dois gatos, para os quais fornece a quantidade de ração em gramas.
# A quantidade diária de ração fornecida para cada gato é sempre a mesma.
# Faça um programa que receba o peso do saco de ração e a quantiddade de ração fornecida
# para cada gato, calcule e mostre quanto restará de ração no saco após cinco dias.

print("***********************SEQUÊNCIAL*****************************")
print("**********************Programa*18*A***************************")
print("******QUANTIDADE DE COMIDAS PARA GATOS PARA 5 DIAS************")

peso_saco = float(input("Por favor, digite a quantidade dos sacos (em KG) "))

peso1 = float(input("Digite a quantidade de ração para o primeiro gato (em Gramas) "))
peso2 = float(input("Digite a quantidade de ração para o segundo gato (em Gramas) "))

peso1 = peso1/1000
peso2 = peso2/1000

total_final = peso_saco - 5 * (peso1 + peso2);

print("Total da ração restante em (KG): {:.2f}".format(float(total_final)))