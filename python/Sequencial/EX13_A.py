# 	13. Sabe_se que:
#
# 1 pé = 12 polegadas
# 1 jarda = 3 pes
# 1 milha = 1760
#
# jardas Faça um programa que receba a medida em pés, faca as conversoes a seguir e mostre os resultados.
#
# a) polegadas
# b) jardas
# c) milhas.

print("***********************SEQUÊNCIAL*****************************")
print("**********************Programa*13A****************************")
print("*******Calculando valores com pes jardas e milhas ************")

print("********1 pé = 12 polegadas **********************************")
print("********1 jarda = 3 pes***************************************")
print("********1 milha = 1760 ***************************************")

pes = float(input("Digite o valor para calculo: "))

polegadas = pes * 12
jardas = pes / 3
milhas = jardas / 1760

print('Os seguintes calculos sao: Pés {0} | Polegadas {1} | Jarda s{2} | Milhas {3}'.format(pes, polegadas, jardas, milhas))