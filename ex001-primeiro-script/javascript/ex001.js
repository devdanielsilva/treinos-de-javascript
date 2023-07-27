/*alert é usado para adicionar uma tela com uma mensagem e um botão no navegador. 

        Sua principal função é mostrar ao usuário uma mensagem e um botão de confirmação de que o usuário tenha visto a mensagem. Para chamar essa função, basta utilizarmos o código alert(), que receberá uma string(mensagem que será exibida ao usuário).
 
        Esse comando pode ser usado com o window. na frete. EXEMPLO: window.alert(''); mas não é necessário, só o alert com parentese e aspas ('') está bom.
        
        O alert só te dá a opção de um botão Ok.*/
alert('Minha primeira mensagem.');

/*window.confirm(''); serve para te mostrar uma janela com uma mensagem de confirmação, ou seja, uma mensagem para o usuário confirmar.
 
Esse comando pode ser usado com o window. na frente ou não. Seguindo o mesmo exemplo do alert.
 
O confirm te dá dois botões de interação, que são o Ok e o cancela, mas nada te impede de mudar para Sim ou Não.*/

/*Podemos pular linha em uma mensagem no javascript, tanto no alert, confirm, prompt ou em qualquer outro.
Basta usar junto ao texto ou em qualquer outro lugar, o \n*/
window.confirm('Mais um comando em \nJavascript.');

/*window.prompt ou só prompt() exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário a entrada de algum texto ou entrada de dados diversos.*/
window.prompt('Qual é o seu o nome?');