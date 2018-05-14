#15) O custo ao consumidor de um carro novo é a soma do preço de fábrica com o percentual de
# lucro do distribuidor e dos impostos aplicados ao preço de fábrica.
# Faça um programa que receba o preço de fábrica de um veículo, o percentual de lucro do
# distribuidor e o percentual de impostos, calcule e mostre:
#
# a) o valor correspondente ao lucro do distribuidor;
# b) o valor correspondente aos impostos;
# c) o preço final do veículo.

print("***********************SEQUÊNCIAL*****************************")
print("**********************Programa*15*A***************************")
print("**********Quanto custa um carro para  o seu bolso ************")

p_fab = float(input("Qual é o preço de fábria do veículo: "))
perc_d = float(input("Qual é o percentual do lucro do distribuidor: "))
perc_i  = float(input("Qual é o percentual do imposto a ser cobrado: "))

vlr_d = p_fab * perc_d / 100
vlr_i  = p_fab * perc_i / 100

p_final = p_fab + vlr_d + vlr_i

print("O valor correspondente ao lucro do distribuidor R$ %.2f " %vlr_d)
print("O valor correspondente aos impostos R$ %.2f " %vlr_i)
print("O valor final do veiculo R$ %.2f" %p_final)


