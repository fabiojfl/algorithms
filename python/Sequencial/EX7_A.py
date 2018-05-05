#7. Faça um programa que receba o salario-base de um funcionario, calcule e mostre o seu salario a receber,
# sabendo-se que esse funcionario tem gratificacao de R$ 50,00 e paga imposto de 10% sobre o salario base.

print("***********************SEQUENCIAL*****************************")
print("************************Programa*7****************************")
print("*Calcula salario com gratificação de R$ 50,00 e imposto de 7%*")

salario_base = float(input("Adcione o salario base: "))

grat = 50.00
imp = salario_base * 7/100;

salario = salario_base + grat - imp

print("A gratificação é R${: .2f} | O imposto é R${: .2f}".format(grat,imp))
print("O Salario é R${: .2f}  ".format(salario))