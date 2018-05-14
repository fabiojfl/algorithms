#16) Faça um programa que receba o numero de horas trabalhadas e o valor do salario mínimo.
# Calcule e mostre o salario a receber seguindo as  regras:
#
# a) a hora trabalhada vale a metade do salario mínimo.
# b) o salario bruto equivale ao numero  de horas trabalhadas multiplicando pelo valor da hora trabalhada.
# c) o imposto equivale  a 3% so salário bruto.
# d) o salário a receber equivale ao salário bruto menos o imposto.

print("***********************SEQUÊNCIAL*****************************")
print("**********************Programa*16*A***************************")
print("*******Salário Bruto com imposto e calulo das horas***********")

sal_min = float(input("Adicione o salário mínimo: "))
hor_trab = float(input("Adicione o número de horas trabalhadas: "))

calc_sal = sal_min/2
sal_brt = hor_trab * calc_sal
imp = sal_brt * 3/100
sal_rec = sal_brt - imp

print("A hora trabalhada que vale a metade do salario mínimo equivale a: R$ %.2f " %calc_sal)
print("O salario bruto equivale ao numero  de horas trabalhadas multiplicando pelo valor da hora trabalhada: R$ %.2f" %sal_brt)
print("O imposto equivale  a 3% so salário bruto: R$% {: .2f}" .format(float(imp)))
print("O salário a receber equivale ao salário bruto menos o imposto: R$ %.2f" %sal_rec)

