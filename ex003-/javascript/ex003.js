alert('Mais um exercício');
window('Vamos para mais um exercício ?');

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