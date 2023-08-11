/*Para ter o alert mostrando junto de um prompt, basta declarar a variável sinal de recebe = prompt('Mensagem para o usuário digitar o nome dele, aqui dentro.'); coloca um alert logo depois do comando de prompt. alert('Mensagem que o usuário irá ver, vai aqui dentro.' + nome da variável que recebeu o nome do usuário + sinal de exclamação '!');
como mostra logo abaixo.*/
var saudacao = prompt('Digite seu nome'); alert('Bem-vindo a aula de operadores parte 2 ' + saudacao + '!');

/*OPERADORES RELACIONAIS:
Os operadores relacionais do Javascript, são os mesmos da grande maioria das linguagens de programação.

TIPOS DE OPERADORES RELACIONAIS:
Operador de maior é o >
Operador de menor é o <
Operador de maior que é o >=
Operador de menor que é o <=
Operador de igual ou diferente é o ==
Operador de diferente é o !=

Para toda expressão que tenha um operador relacional ligado a ela, o resultado dessa expressão vai sempre ser um valor booleano. Um valor do tipo Verdadeiro ou Falso.

EXEMPLOS COM OS OPERADORES RELACIONAIS:
5 >2 É verdadeiro (true), porque 5 é maior que 2.
7 < 4 É falso (false), porque 7 não é menor que 4.
8 >= 8 É verdadeiro (true), porque 8 não maior que 8 mas, é igual a 8.
9 <= 7 É falso (false), porque 9 não é menor e não é igual a 7.
5 == 5 É verdadeiro (true), porque 5 é igual a 5. No Javascript o sinal de igual é, dois sinais de igual juntos == Um único sinal de igual = é, sinal de recebe, ou seja, sinal de atribuição.
4 != 4 Esse sinal de exclamação e sinal de igual, é sinal de não-igual, e uma coisa que não é igual, é diferente. Nesse caso é Falso (false), porque 4 é igual a 4.

*/
