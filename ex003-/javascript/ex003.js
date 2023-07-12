/*Abaixo é uma variável com um prompt para receber o nome do usuário.  */
var nome = window.prompt('Qual é o seu nome?');
/*Abaixo o alert que vai mostrar uma mensagem junto do nome do usuário. Nome que está armazenado na variável nome. */
alert('É um grande prazer em te conhecer, ' + nome + '!'); /*O sinal de + é sinal de concatenação. 
Quando queremos que um alert mostre uma mensagem e o valor da variável nome, adicionamos fora das aspas da mensagem, seja aspas simples ou duplas, adicionamos o sinal de concatenação + e o nome da variável que tem o valor que queremos que mostre junto desta mensagem.

Para adicionar uma esclamação no final da mensagem com o nome, é só colocar o sinal de concatenação + e coloca dentro de aspas o sinal de esclamação.*/

/*O script abaixo é de um botão. */
document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', () => {
        alert('Olá seja bem Vindo ao ex003' + '!')
    })
});