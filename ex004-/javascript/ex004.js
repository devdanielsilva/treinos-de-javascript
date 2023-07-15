var nome = prompt('Qual é o seu nome?'); /*Nesse caso aqui, o prompt é uma tela com um botão de ok. Serve para mostrar algo.*/
/*-----------------------------------------------*/
document.write(`Olá,<strong> ${nome}</strong>! Seu nome tem ${nome.length} letras.`); /*document.write escreve na tela direto, sem precisar de telinha.

Esse nome.length serve para saber o tamanho de caracteres.

length é o comprimento de algo.*/

/*DIFERENÇA DE ASPAS SIMPLES E SINAL DE CRASE:
SÍMBOLO DE CRASE É ESSE: `
SÍMBOLO DE ASPAS SIMPLES É ESSE: '
--------------------------------------------------
USAR <strong> NO ${nome}, não tem problema.
A tag strong deixa a palavra ou trecho de texto em negrito de forma semântica.

Quebra de linha, antes do final das aspas, independente qual seja o tipo de aspas, podemos usar a tag <br/> para quebra de linha. Sempre que precisarmos, sem problema nenhum.
*/
//------------------------------------------------
document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()} <br/>`); /*O Atributo toUpperCase, serve para deixar os caracteres em LETRAS MAIÚSCULAS.*/
/*----------------------------------------------*/
document.write(`Seu nome em minúsculo é ${nome.toLowerCase()} <br/>`) /*O Atributo toLowerCaser, server para deixar os caracteres em letras minúsculas.*/
/*----------------------------------------------*/
/*FORMATANDO NÚMEROS EM JAVASCRIPT

EXEMPLO: Se temos uma variável que vai receber um valor acima de 1000, e queremos que esse número tenha 2 casas decimais. 

EXLPICAÇÃO LOGO ABAIXO: */

var n1 = 1545.5; /*Para mostrar esse número com 2 casas decimais, fazemos o seguinte. Digitamos o nome da variável que tenha os números que vai receber atributos para serem mostrados com 2 casas decimais.*/

alert('Número com 2 casas decimais é: ' + n1.toFixed(2)); /*O Comando toFixed(2) serve para mostrar os números com as casas decimais. Nesse exemplo foi 2 casas decimais, mas pode ser mais.
--------------------------------------------------
Só que tem um problema, no lugar do ponto é uma virgula, aqui no Brasil usamos bastante virgulas.

Para resolver este problema, fazemos o seguinte: Utilizamos toFixed(2).replace('.', ','). 

Basicamente o que vai acontecer é, vamos trocar o ponto pela virgula, para isso ser feito, dentro de aspas colocamos um . ponto, que é o ponto que vai ser trocado, depois uma virgula no meio, abre aspas coloca , uma virgula e fecha aspas. 
Ai o ponto vai ser trocado. 
*/

n1.toFixed(2).replace('.', ',');
