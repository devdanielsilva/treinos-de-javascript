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
alert("O resultado da soma é: " + soma);

/*O sinal de mais + , tem o efeito de adição e também tem o efeito de concatenação.
--------------------------------------------------------
Para o sinal de mais + ser usado para adição, tem que ser, number + number. Para ser utilizado para uma concatenação, tem que ser, string + string.
--------------------------------------------------------
Para soma de números inteiros, usamos parseInt.
Para soma de números Reais, usamos o parseFloat.
--------------------------------------------------------
O window.prompt ou só prompt, esse comando nos retorna valores como string, mesmo que seja números Inteiros ou Reais. Ele trata todos os valores como string.
*/

/*----------------------------------------------------*/



