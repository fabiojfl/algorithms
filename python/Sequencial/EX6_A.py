#6. faça um programa que receba o salario-base de um funcionario, calcule e mostre o salario a receber,
# sabendo-se que esse funcionario em gratificação de 5% sobre o salario base e paga
# imposto de 7% sobre o salario-base.

print("***********************SEQUENCIAL***************************")
print("************************Programa*6**************************")
print("*Calcula salario base com gratificação de 5%e imposto de 7%*")
print("************************************************************")

salario_base = float(input("Digite o salario: "))

grat = salario_base * 5/100
imp  = salario_base * 7/100

salario_atual = salario_base + grat - imp

print("O Salario base é R${: .2f} ".format(salario_base))
print("A gratificação é R${: .2f} | O imposto é R${: .2f}".format(grat,imp))
print("Salário atual R${: .2f}".format(salario_atual))