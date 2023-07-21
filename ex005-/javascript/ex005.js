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
Então, e recebe o valor de 2.
e = 2
..........................................................................................
var f = b % e + 4 / e
A variável f recebe o valor b % e + 4 / e
Então, f recebe o valor de 3.
f = 3
...........................................................................................
*/
/*------------------------------------------

*/