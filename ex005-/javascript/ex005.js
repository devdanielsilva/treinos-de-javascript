/*CUIDADOS QUE DEVEMOS TOMAR COM OS OPERADORES.

Seja na matemática e na programação, devemos tomar muito cuidado com a PRECEDÊNCIA DE OPERADORES.

A precedência de operadores **determina a ordem em que os operadores são processados**. Operadores com maior precedência são processados primeiro. 

EXEMPLO: O operador de multiplicação (" * ") tem maior precedência que o operador de adição (" + ") e por isso será executado primeiro.*/
/*-------------------------------------------
Operadores do Javasrcipt
Existem vários operadores no JAVASCRIPT.

Neste curso de Javascript do curso em vídeo vimos:

Operadores aritméticos, Operadores de atribuição, Operadores relacionais, Operadores lógicos e Operadores ternário.
*/
/*------------------------------------------
Operadores aritméticos
- + Adição
- - Subtração
- * Multiplicação
- / Divisão
- % Resto da divisão inteira (É confundido com Porcentagem). Para uma divisão de resto da divisão inteira, ao decorrer da divisão, quando chegar o momento que tiver que colocar uma virgula ao lado do número, paramos de dividir.

EXEMPLO DE RESTO DE DIVISÃO INTEIRA: 5/ 2 = 2 Não colocamos a virgula ou ponto e o 5, colocamos 2 sozinho. 5 dividido por 2 é 2, 2*2 2 vezes 2, é 4, para chegar a 5, resta 1. Depois disso paramos por aqui, porque se não, teremos que colocar uma virgula do lado do 2 e o 0 zero do lado do 1 e continua dividindo até chegar o resto da divisão 0 zero.

Mas quando queremos o números do resto da divisão inteira, paramos no momento em que tiver que colocar a virgula. NESTE EXEMPLO: O Resto da divisão inteira, é 1 um.

- **  O sinal de multiplicar 2 vezes junto, não é multiplicação, mas sim o sinal de potencia.

EXEMPLO: 5**2 = 25 (5 ao quadrado * vezes 2, é 25).
*/
/*----------------------------------------
## CUIDADOS AO USAR OPERADORES

Quanto na matemática e na programação, devemos tomar muito cuidado com a PRECEDÊNCIA DE OPERADORES.

A precedência de operadores **determina a ordem em que os operadores são processados**. Operadores com maior precedência são processados primeiro. 

EXEMPLO: 

`3 + 4 * 5 // returns 23`

Primeiro fazemos a multiplicação e depois a adição.

4 * 5 (4 * vezes 5, é 20) (Pegamos o resultado 20 e fazemos a adição com 3.) (3 + 20 = 23)

 O operador de multiplicação (" * ") tem maior precedência que o operador de adição (" + ") e por isso será executado primeiro.

 ..........................................
 EXEMPLO NÚMERO 2: 
 5 + 3 / 2 O que diriam sem saber das regras de uso dos operadores, é 4. Mas isso está errado, pois, nessa operação, começamos dividindo primeiro antes de fazer a adição.

 FICARÁ ASSIM: 3 / 2 = 1,5 

3 dividido por 2, é 1,5.

DEPOIS FAZEMOS A ADIÇÃO, QUE É A SEGUNDA PARTE DA OPERAÇÃO.
Depois de fazer a divisão, faremos a adição.

5+ 1.5 = 6.5

5 + mais 1.5 é igual = 6.5
...........................................
MAS CASO QUEREMOS FAZER PRIMEIRO A ADIÇÃO DE 5 + 3

É só colocarmos parênteses nos número e da expressão de adição para podermos fazer isso. Fazendo isso mudamos a ordem de precedente. Ou seja, a ordem de importância.
Ai nesse caso, invés de 3 / dividido por 2, que é 4.

Temos 5 + 3 = 8

Eai podemos prosseguir.
5 + 3 = 8 / 2 = 4

*/
/*------------------------------------------
## DICAS SOBRE O USO DE OPERADORES

Não receber mensagens de erros, não significa que o programa está funcionando. Pode significar que ele não contem erros sintáticos. Que você não escreveu nenhum comando errado, mas o seu comando pode estar executando uma conta errada.

EXEMPLO: 

5 + 3 / 2  —→ De forma aritmética e sintática, está correta.

5 + / 2  —→ De forma aritmética está errada. 
Em qualquer linguagem de programação, em qualquer expressão. 

Em primeiro lugar é analisado todos os parênteses.

Em segundo lugar, vez as potencias (**).

Em terceiro lugar, vez a Multiplicação (*), a Divisão (/) e o Resto da Divisão (%) - (Divisão como Inteiro). As três juntas, exatamente nessa ordem. Mas se a três operações estiverem na mesma expressão, fazemos a operação da esquerda para a direita.

Em quarto lugar, vem a Adição (+) e Subtração (-).
*/
/*------------------------------------------
ATRIBUIÇÃO SIMPLES
Sinal de igual em uma expressão, não é sinal de igual, é sinal de recebe.

var a = 5 + 3 
A variável a recebe o valor de 5 + 3. 
5 + 3 = 8
Então, a variável a recebe 8. 
a = 8
........................................................................................
var b = a % 5 
A variável b recebe o valor de a % 5.
a é 8. 8 % dividido por 5 é = 1. 5 * 1 = 5. Para 8 restam 3.

a % 5 = 3
Então, a variével b recebe 3.
b = 3
.........................................................................................
var c = 5 * b ** 2
A variável c recebe o valor de 5 * b ** 2.
Nessa operação dessa expressão, começamos fazendo do final para o início. 

Seria assim b ** ao quadrado vezes 2. 
O b vale 3, 3 ** ao quadrado é 9.
9 * vezes 5 é = 45.

Então, c recebe o valor de 45.
c = 45
.........................................................................................
var d = 10 - a / 2
A variável d recebe o valor de 10 - a / 2.
Pela ordem de precêdencia, a divisão vem primeiro que a subtração.

Então fica assim: a vale 8 / dividido por 2 é = 4.
4 - 10 = 6

Então, d recebe o valor de 6.
d = 6
..........................................................................................
var e = 6 * 2 / d
A variável e recebe o valor de 6 * 2 / d.

Nessa expressão temos algo bem curioso. Na ordem de precedência, * Multiplicação e / Divisão, estão juntas. Quando acontece de ter essas 2 operações em uma expressão, a ordem e ir da Direita para a esquerda. 

Nesse caso primeiro é feita a resolução da Multiplicação e depois da Divisão.

6 * vezes 2 = 12
 d = 6 , logo.
 12 / dividido por 6 = 2

Então, e recebe o valor de 2.
e = 2
..........................................................................................
var f = b % e + 4 / e
A variável f recebe o valor b % e + 4 / e

Seguindo a ordem de precedência, primeiro fazemos a divisão inteira, depois a divisão e por último a adição.

b é = 3
e é = 2
...........................................
PRIMEIRO A DIVISÃO DO RESTO INTEIRO (% Dividido o resto por inteiro)
b % e - (3 % dividido por 2 o resto.)
3 % 2 = 1. Dá 1 e resta 1.

SEGUNDO A DIVISÃO "COMUM" ( / DIVISÃO)
e = 2
4 / e = 2 , para 5 resta 1. Logo 4 / e = 1

E POR ÚLTIMO FAZEMOS A ADIÇÃO:
2 + 1 = 3
B + E = 3

Então, f recebe o valor de 3.
f = 3
...........................................................................................
[Dica sobre variável: A variável é como se fosse uma vaga de um estacionamento, se queremos colocar um carro em uma vaga que já tem um carro. Primeiro tiramos o primeiro carro e depois colocamos o segundo carro no lugar do primeiro. Com as variáveis é exatamente assim que acontece.
*/
/*------------------------------------------
AUTO-ATRIBUIÇÕES

São atribuições a própria variável.
..........................................................................................
EXEMPLO DE AUTO-ATRIBUIÇÃO:

Atribuição simples ( var n = 3 ) 

n = n + 4 
(Pegamos o valor de n que é 3, e somamos mais 4. 3 + 4 = 7
Dai jogamos o resultado 7 da variável n, no lugar do resultado 3).

n = n - 5 
(Pegamos o valor de n, que agora é 7, e subtraimos 5. Fica assim: 5 - 7 = 2.
Dai colocamos 2 no lugar do 7 dentro da variável n).

n = n * 4 
(Pegamos o valor de n, que é 2, e multplicamos por 4. 2 * 4 = 8
Dai fazemos a substituição de 2 por 4, dentro da variável n).

n = n / 2
(Pegamos o valor de n, que passou a 8, e dividimos por 2. 8 / 2 = 4
Dai jogamos o valor 4 dentro da variável n).

n = n ** 2
(Pegamos o valor de n, que passou a ser 4 e fazemos uma exponeciação. 4 ** 2 = 16 
Dai jogamos dentro da variável o 16 no lugar do 4)

n = n % 5
(Pegamos o valor de n, que é 16 e fazemos o resto da divisão. 16 % dividido por 5 = O resto inteiro é 3, eai fazemos uma Multiplicação, 3 * 5 = 15 para 16 resta 1. 
Então o valor de n, deixa de vale 16 para no final valer 1).
...................................................................................................
No geral tudo isso de tirar valor, colocar valor, e utilizar o valor anterior que estava dentro da variável como número para soma (adição), subtração, multiplicação, divisão, potencia, entre outras diversas formas. Tudo isso se chma auto-atribuição, que é atribuir a si próprio, um valor maior ou menor......   
............................................................................................

Podemos simplificar a auto-atribuição
EXEMPLOS:

Em vez de digitar, (n = n + 4) digitamos [n + = 4]
E isso serve para todos os outras operações.

(n = n - 5) trocamos por [n - = 5]

(n = n * 4) trocamos por [n * = 4]

(n = n / 2) trocamos por [n / = 2]

(n = n ** 2) trocamos por [n ** = 2]

(n = n % 5) trocamos por [n % = 5]
......................................................................................................
Lembrando que, esse tipo de simplificação de auto-atribuição, só é válida somente se o valor de n, ou qualquer que seja a variável, se essa variável receber o valor dela mesmo com outro valor. Só não é válida, por exemplo: n x + = 4 , esse formato e esse tipo de auto-atribuição, não é válida.

Aprendendo sobre isso, dá para ser utilizado em quase toda linguagem de programação. As linguagens que aceita essa simplificação de Auto-atribuição / Autorreferência são: JAVASCRIPT, JAVA, C, PYTHON, PHP, entre diversas liguagens aceitam este tipo de sintaxe. Principalmente as linguagens atuais.

Simplificação de auto-atribuição, é uma forma resumida de auto - atribuir um valor a uma variável.
--------------------------------------------------------------------------------------------*/
/* OPRADORES DE INCREMENTO

*/