# Desafios

1. Reescreva os programas "Cálculo IMC" e "Conversor de Temperatura" para serem executados na própria página HTML

# Exercícios complementares

## 1. Tipo de um triângulo

Escreva um programa que leia as medidas dos lados de um triângulo e escreva sua classificação de acordo com o tamanho dos seus lados:

* _Equilátero_: todos os lados tem o mesmo tamanho
* _Isósceles_: dois lados tem o mesmo tamanho, mas o terceiro é diferente
* _Escaleno_: os três lados do triângulo tem tamanhos diferentes

**Observação**: é preciso verificar se os lados informados são realmente de um triângulo, ou seja, se a forma pode ser "fechada". Para isso, os lados da forma devem atender a **TODAS** as seguintes condições:

~~~js
ladoA < (ladoB + ladoC)
ladoB < (ladoA + ladoC)
ladoC < (ladoA + ladoB)
~~~