alert('Mais um exercício')

document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', () => {
        alert('Olá seja bem Vindo ao ex003')
    })
})

var n1 = parseInt(prompt("Digite um número"));
var n2 = parseInt(prompt("Digite um número"));
alert( "O resultado da soma é: "+ (n1 + n2));