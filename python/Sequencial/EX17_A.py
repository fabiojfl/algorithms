
#17) Um trabalhador recebeu seu salário e o depositou em sua conta bancária.
# Esse trabalhador emitiu dois cheques e agora deseja saber o seu saldo atual.
# Sabe-se que cada operacão bancária de retirada paga CPMF de 0,38% e o salario inicial da conta esta zerado.

print("***********************SEQUÊNCIAL*****************************")
print("**********************Programa*16*A***************************")
print("******************Verificar o saldo atual*********************")

vlr_sal = float(input("Qual o valor do depósito? "))

vlr_cheq1 = float(input("Qual o valor do cheque 1? "))
vlr_cheq2 = float(input("Qual o valor do cheque 2? "))

saq1 = vlr_cheq1 * 0.38/100
saq2 = vlr_cheq2 * 0.38/100

saldo = vlr_sal - vlr_cheq1- vlr_cheq2 - saq1 - saq2

print("(+)Depósito: R$ %.2f" %vlr_sal)
print("(-)RETIRADA CHEQUE R$ %.2f" %vlr_cheq1, "(-) TARIFA CPMF 0.38% R$ {: .2f}" .format(float(saq1)))
print("(-)RETIRADA CHEQUE R$ %.2f" %vlr_cheq2, "(-) TARIFA CPMF 0.38% R$ {: .2f}" .format(float(saq2)))
print("Saldo atual: R$ {: .2f}" .format(float(saldo)))

#print("O valor do rendimento é: R$ {: .2f} | O valor Total é: R$ {: .2f}".format(float(vlr_rendimento), float(vlr_total)))