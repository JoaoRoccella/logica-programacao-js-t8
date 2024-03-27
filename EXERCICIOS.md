# Exercícios

## 1. Tipo de um triângulo

Escreva um programa que leia as medidas dos lados de um triângulo e escreva sua classificação de acordo com o tamanho dos seus lados:

* Equilátero: todos os lados tem o mesmo tamanho
* Isósceles: dois lados tem o mesmo tamanho, mas o terceiro é diferente
* Escaleno: os três lados do triângulo tem tamanhos diferentes

**Observação**: é preciso verificar se os lados informados são realmente de um triângulo, ou seja, se a forma pode ser "fechada". Para isso, os lados da forma devem atender a TODAS as seguintes condições:

~~~js
ladoA < (ladoB + ladoC)
ladoB < (ladoA + ladoC)
ladoC < (ladoA + ladoB)
~~~