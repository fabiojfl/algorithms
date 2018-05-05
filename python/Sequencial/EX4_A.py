#4.Faca um programa que receba o salario de um funcionario, calcule e mostre o novo salario, sabendo-se que este sofreu um aumento de 25%.

print("********************SEQUENCIAL*************************")
print("********************Programa*4*************************")
print("*********Cálculo do aumento salarial de 25%  **********")
print("*******************************************************")

salario = float(input("Veja o aumento de 25% no seu salário: "))
novo_salario = salario + (salario * 25/100);

print('Salario anterior: R$ {: .2f} | Salario Atual: R$ {: .2f}.'.format(salario, novo_salario))
