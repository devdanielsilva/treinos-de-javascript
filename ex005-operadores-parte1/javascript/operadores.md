# Operadores Relacionais
Os operadores relacionais do Javascript, são os mesmos da grande maioria das linguagens de programação.<br>
<hr>
## TIPOS DE OPERADORES RELACIONAIS: <br>
Operador de maior é o >
Operador de menor é o <
Operador de maior que é o >=
Operador de menor que é o <=
Operador de igual ou diferente é o ==
Operador de diferente é o != <br>
<hr>
Para toda expressão que tenha um operador relacional ligado a ela, o resultado dessa expressão vai sempre ser um valor booleano. Um valor do tipo Verdadeiro ou Falso. <br> <hr>
### EXEMPLOS COM OS OPERADORES RELACIONAIS:<br> <hr>
5 >2 É verdadeiro (true), porque 5 é maior que 2.
7 < 4 É falso (false), porque 7 não é menor que 4.
8 >= 8 É verdadeiro (true), porque 8 não é maior que 8 mas, é igual a 8. <br>
9 <= 7 É falso (false), porque 9 não é menor e não é igual a 7. <br>
5 == 5 É verdadeiro (true), porque 5 é igual a 5. <br>No Javascript o sinal de igual é, dois sinais de igual juntos == Um único sinal de igual = é, sinal de recebe, ou seja, sinal de atribuição. <br>
4 != 4 Esse sinal de exclamação e sinal de igual, é sinal de não-igual, e uma coisa que não é igual, é diferente. <br> Nesse caso é Falso (false), porque 4 é igual a 4. <br> <hr>
Sinal de desigual restrito !== <br> EXEMPLO: x !== y e tem o valor 5 cada um, é igual a true (verdadeiro) ou seja, são de tipos diferentes, e o valor interno é o mesmo.<hr>
### Operador typeof <br>
O typeof é uma palavra-chave em JavaScript que retornará o tipo da variável quando você a chama. <br> Você pode usá-la para validar parâmetros de função ou verificar se as variáveis estão definidas. <br> Há outros usos também. O operador typeof é útil porque é uma maneira fácil de verificar o tipo de uma variável em seu código. <br> <hr>
### Operadores Lógicos<br>
! - Negação, Sinal de Exclamação: Serve para negação, ou seja, quer dizer não.<br> O operador de negação é tratado como um operador unário.<br> Ou seja, ele só tem um operando, isso é depois da exclamação colocamos ou o valor true (verdadeiro) ou, o o valor false (falso). <br>Ou uma expressão que dê true ou false.<br>
EXEMPLO DE NEGAÇÃO: ! ou é true ou é false. <br> Uma coisa que não é true, é false. Uma coisa que não é false, é true.<br> 
O operador de negação é um operador bem simples de entender.<hr>
&& - Dois e comerciais: Serve para conjunção, é chamado de elógico. E um operador binário, ou seja, tem dois valores lógicos, um de cada lado, que nos dá o resultado lógico da expressão.<br><hr>
|| - Sinal ou tecla de pipe: Serve para disjunção, é chamado de oulógico. E também é um operador binário, e assim como os dois && comercial, ele também nos dá um resultado lógico da expressão. <br>A diferença do && comercial e do || pipe, é que com o uso do pipe, que é o ou lógico, nele basta que um dos resultados sejam verdadeiros para que o resultado da expressão seja verdadeiro.<br><hr>
Quando temos operadores aritméticos, relacionais e lógicos, na mesma expressão. 
Primeiro fazemos a resolução de todos os operadores aritméticos, segundo todos os operadores relacionais e em terceiro e por último, o operador lógico.<br>
EXEMPLO USANDO O ELÓGICO:<br> a > b && b % 2 == 0 <br> Primeiro é resolvido o b % 2, b é 8 / dividido por 2, dá 4 resta 0 <br> Ai no lado do b %, o resultado é true. <br>
Segundo é resolvido o operador relacional, o a > b, a é > maior que b, a é 5 e b é 8, e o resultado é false.<br> 
Portanto o resultado da expressão é false.<br> False e True, dá false.<br>
<br>EXEMPLO USANDO O OULÓGICO: <br> 
a <= b || b /2 == 2 <br>
Primeiro, resolvemos o operador aritmético, b que é 8 / dividido por 2, é 4. 4 é igual == a 2. Não, logo o resultado é false. <br>
Segundo, resolvemos o operador relacional, a que é 5, é menor <= ou igual a b que é 8, não, logo o resultado é false.<br>
Terceiro e último, resolvemos o operador lógico, se um dos lados for true, então o resultado da expressão é true, mesmo que um dos lados for false.<br>

