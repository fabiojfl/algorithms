#8. Faça um programa que receba o valor de um depósito
# e o valor da taxa de juros, calcule e mostre o
# valor do rendimento e o valor total depois do rendimento.

print("***********************SEQUENCIAL*****************************")
print("************************Programa*8****************************")
print("*******Calcula deposito com taxa de juros e rendimento********")

vlr_dep = float(input("Digite o valor do deposito: "))
vlr_tx  = int(input("Digite o valor do imposto. Ex 10 que é igual a 10%: "))

vlr_rendimento = vlr_dep * vlr_tx/100
vlr_total = vlr_dep + vlr_rendimento

print("O valor do rendimento é: R$ {: .2f} | O valor Total é: R$ {: .2f}".format(float(vlr_rendimento), float(vlr_total)))