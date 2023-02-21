algoritmo "IMC"
var
M, A, IMC: Real
inicio
Escreval ("Quantos KG você tem?:")
Leia (M)
Escreval ("Qual é a sua altura?:")
Leia (A)
IMC <- M / (A ^ 2)
Escreval ("IMC:", IMC:5:2)
Se (IMC >= 18.5) e (IMC < 25) Entao
   Escreval ("Você está no peso ideal")
Fimse
Se (IMC < 17) Entao
   Escreval ("Você está muito abaixo ddo peso")
Fimse
Se (IMC >= 17) e (IMC < 18.5) Entao
   Escreval ("Você está abaixo do peso")
Fimse
Se (IMC >= 25) e (IMC < 30) Entao
   Escreval ("Vocês está com sobrepeso)
Fimse
Se (IMC >= 30) e (IMC < 35) Entao
   Escreval ("Você está com obesidade")
Fimse
Se (IMC >= 35) e (IMC < 40) Entao
   Escreval ("Você está com obesidade Severa")
Fimse
Se (IMC >= 40) Entao
   Escreval ("Você está com obesidade Mórbita")
Fimse

fimalgoritmo

<!-- Programa utilizado: Visualg -->

