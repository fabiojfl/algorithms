#5.faca um programa que receba o salario de um funcionario e o percentual de aumento,calcule e mostre o aumento do salario.

print("********************SEQUENCIAL*************************")
print("********************Programa*5*************************")
print("*********Salário com percentual e aumento**************")
print("*******************************************************")

salario = float(input("Adicione o salario: "))
percentual = int(input("Adicione o percentual EX: 10 que é igual a 10%: "))

calc_acrec = salario * percentual/100

resultado = salario + (salario * percentual/100)

print("O aumento é R${: .2f}".format(resultado))

