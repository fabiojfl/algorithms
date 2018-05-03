#2.Faca um programa que receba tres notas, calcule e mostre a media aritmetica entre elas.
print("********************SEQUENCIAL*************************")
print("********************Programa*2*************************")
print("************Calculo da média aritmética. **************")
print("*******************************************************")

num1_typed = input("Digite a primeira nota: " )
num2_typed = input("Digite a segunda nota: " )
num3_typed = input("Digite a terceira nota: ")

res_type = float(num1_typed) + float(num2_typed) + float(num3_typed)


print('A media aritmetica das tres notas são %s' % format(float(res_type/3), ".1f"))