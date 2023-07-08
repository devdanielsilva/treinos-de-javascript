alert('Mais um exercício')

document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', () => {
        alert('Olá seja bem Vindo ao ex003')
    })
})

var n1 = prompt("Digite um número");
var n2 = prompt("Digite um número");
console.log(n1 + n2);