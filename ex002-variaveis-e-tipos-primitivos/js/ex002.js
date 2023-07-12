/*Treinando tela de alerta.*/
alert('Treino de Javascript - ex002'); //Tela de alerta com uma mensagem.

confirm('Ir para o ex002');//Tela de confirmação. Ok e Cancelar


/*O script abaixo é de um botão. */
document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', () => {
        alert('Olá seja bem Vindo ao ex002' + '!')
    })
});

/*O script abaixo é de soma simples de duas variáveis.

É um script de soma de duas notas, seja com vírgula ou não.*/

var n1 = parseFloat(prompt("Digite o primeiro número"));
var n2 = parseFloat(prompt("Digite o segundo número"));
var soma = alert("O resultado da soma é: " + (n1 + n2) + '!');

/*O sinal de mais + , tem o efeito de adição e também tem o efeito de concatenação.*/


