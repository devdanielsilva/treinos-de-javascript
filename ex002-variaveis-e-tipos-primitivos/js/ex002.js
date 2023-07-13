/*Treinando tela de alerta.*/
alert('Treino de Javascript - ex002'); //Tela de alerta com uma mensagem.

confirm('Ir para o ex002');//Tela de confirmação. Ok e Cancelar


/*O script abaixo é de um botão. */
document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', () => {
        alert('Olá seja bem Vindo ao ex002' + '!')
    })
});

/*----------------------------------------------------*/

/*O script abaixo é de soma simples de duas variáveis.

É um script de soma de duas notas, seja com vírgula ou não.*/

var n1 = parseFloat(prompt("Digite o primeiro número"));
var n2 = parseFloat(prompt("Digite o segundo número"));
var soma = n1 + n2;
alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`); //Alert utilizando o template string.

/*O sinal de mais + , tem o efeito de adição e também tem o efeito de concatenação.
--------------------------------------------------------
Para o sinal de mais + ser usado para adição, tem que ser, number + number. Para ser utilizado para uma concatenação, tem que ser, string + string.
--------------------------------------------------------
Para soma de números inteiros, usamos parseInt. O I de parseInt é sempre maiúsculo.

Para soma de números Reais, usamos o parseFloat. O F de parseFloat é sempre maiúsculo.

Parse é converter, parcia algo.

Podemos usar só Number, ai o JAVASCRIPT se vira para com a conversão para tipo definido. Claro que o uso da sintaxe Number não elimina o uso da sintaxe parseInt e ou, da sintaxe ParseFloat, depende muito do tipo do projeto.
--------------------------------------------------------
O window.prompt ou só prompt, esse comando nos retorna valores como string, mesmo que seja números Inteiros ou Reais. Ele trata todos os valores como string.
*/

/*----------------------------------------------------*/
/*Conversão de string para número é muito simples.

Podemos usar o Number.parseInt, que usado para números Inteiros. Podemos usar o Number.parseFloat, que é usado para números Reais, números com vírgula. (É parseFloat, porque o número com vírgula, essa vírgula é um ponto, é chamado de PONTO FLUTUANTE - (Float point).*/
/*----------------------------------------------------*/
/*CONVERSÃO DE NÚMERO PARA STRING:
Temos 2 formas para fazer isso.

Podemos usar String(n), no lugar do n, colocamos o valor numérico dentro do parenteses. Que ele vai converter o valor numérico que você quer para String (Caractere). A sintaxe String(n), é a mais recente para conversão de números pra string.

Podemos usar o n.toString(), o n será o valor numérico a ser convertido.

Essas 2 formas são muito utéis para conversão de números para string.*/

/*-----------------------------------------------------*/
//CTRL + SHIFT ' SINAL DE CRASE.
