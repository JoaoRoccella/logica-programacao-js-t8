# Desafios

1. Reescreva os programas "Cálculo IMC" e "Conversor de Temperatura" para serem executados na própria página HTML

# Exercícios complementares

Desenvolva os exercícios de forma que eles possam ser executados na própria página HTML, SEM UTILIZAR os métodos do objeto `window`. Cada exercício pode ser desenvolvido em uma página HTML exclusiva. Na sua página `index.html`, crie um menu de navegação com o link para cada página de exercício. 

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

## 2. Desconto Funcionário

Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes VIPs. 

Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o valor total da compra efetuada e um código que identifique se o comprador é um cliente comum [1], funcionário [2] ou VIP [3].

A saída do programa deve ser o valor total da compra após o processamento e a categoria do desconto aplicado, se houver.

**Dica:** para calcular um percentual de um número, faça a operação `desconto = valor * percentualDesconto / 100`

## 3. Jogo de Futebol

Desenvolva um programa que receba do usuário o placar de um jogo de futebol (os gols de cada time), e informa se o resultado foi empate, vitória do primeiro time ou vitória do segundo time.

**Desafio extra:** crie uma forma do programa ler o placar no formato "n x n". Exemplo: "7 x 1"

## 4. Busca de um nome

Desenvolva um programa que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor. Após isso, o programa deve pertmitir a leitura de mais um nome qualquer para ser efetuada uma busca entre os nomes inseridos anteriormente. O programa deve exibir a mensagem _ACHEI_ caso encontre o nome e _NÃO ACHEI_ caso não encontre o nome.

**Dica:** pesquise os métodos disponíveis para manipulação de arrays.

## 5. Posto de Gasolina

Um posto está vendendo combustíveis com a seguinte tabela de desconto:

* Álcool:
    * até 20 litros, desconto de 3% por litro
    * acima de 20 litros, desconto de 5% por litro
* Gasolina:
    * até 20 litros, desconto de 4% por litro
    * acima de 20 litros, desconto de 6% por litro

Escreva um programa que leia o número de litros vendidos e o tipo de compustível (codificado da seguinte forma: [A] Álcool, [G] Gasolina) e calcule e imprima o valor a ser pago pelo cliente. 

Utilize a tabela de preços:
* Álcool: R$ 2,89
* Gasolina: R$ 5,19

## 6. Produtos com desconto

Desenvolva um programa que calcule o desconto da compra de produtos baseado na quantidade de produtos comprados. 

O programa deve ler o código do produto e a quantidade adquirida. Você pode utilizar uma estrutura de dados *JSON* para armazenar as informações dos produtos.

Quantidade | Desconto
------ | -------
3 até 5 | 2%
6 a 10 | 3%
mais que 10 | 5%

## 7. Taxa de Natalidade e Mortalidade

Desenvolva um programa que calcule esses indicadores, obtendo, para isso, o número de habitantes, o número de nascimentos e o número de óbitos de uma determinada população. 

* taxa de natalidade: número de nascimentos x 1000 / número de habitantes
* taxa de mortalidade: número de óbitos x 1000 / número de habitantes

O usuário deve optar entre [N] Taxa de Natalidade e [M] Taxa de Mortalidade. O resultado exibido deve estar de acordo com a opção selecionada.