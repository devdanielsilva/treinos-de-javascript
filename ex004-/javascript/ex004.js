var nome = prompt('Qual é o seu nome?'); /*Nesse caso aqui, o prompt é uma tela com um botão de ok. Serve para mostrar algo.*/

document.write(`Olá,<strong> ${nome}</strong>! Seu nome tem ${nome.length} letras.`); /*document.write escreve na tela direto, sem precisar de telinha.

Esse nome.length serve para saber o tamanho de caracteres.

length é o comprimento de algo.*/

/*DIFERENÇA DE ASPAS SIMPLES E SINAL DE CRASE:
SÍMBOLO DE CRASE É ESSE: `
SÍMBOLO DE ASPAS SIMPLES É ESSE: '
*/
//------------------------------------------------
document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()} `); /*O Atributo toUpperCase, serve para deixar os caracteres em LETRAS MAIÚSCULAS.*/