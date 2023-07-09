/*Treinando tela de alerta.*/
alert('Treino de Javascript - ex002'); //Tela de alerta com uma mensagem.

confirm('Ir para o ex002');//Tela de confirmação. Ok e Cancelar


/*O script abaixo é de um botão. */
document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', () => {
        alert('Olá seja bem Vindo ao ex003')
    })
});

/*O script abaixo é de soma simples de duas variáveis. */
var n1 = parseInt(prompt("Digite o primeiro número"));
var n2 = parseInt(prompt("Digite o segundo número"));
alert("O resultado da soma é: " + (n1 + n2));