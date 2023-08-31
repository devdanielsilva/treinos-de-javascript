/*Se quisermos mostrar coisas na tela com o window.document.white(window.navigator.appName); 
    Que serve para mostrar o nome do navegador que você está usando. */

alert("Olá mundo");

    window.document.write(window.navigator.appName) ; //Mostra o nome do navegador
    "<hr>";

    /* */
    window.document.write(window.document.URL); //Mostra a URL do site.

    /* SELEÇÃO POR NOME DE PARÁGRAFO
    A variável acima está selecionando o primeiro parágrafo, por meio de colchetes [0] dentro de colchetes, colocamos o número que corresponde a posição do parágrafo. 
    var p1 = document.getElementsByName('p')[0];

    ESCREVER UM PARÁGRAFO NA TELA
    document.write(); serve para escrever na tela, o texto do parágrafo selecionado.

    window.document.write('Está escrito assim: ' + p1.innerText); 
    */

    /* MUDAR A COR DE UM TEXTO DE UM PARÁGRAFO
    p1.style.color = 'red';
    serve para a cor do primeiro parágrafo. 
    
    É um exemplo para mudar a cor de fundo do body de um documento HTML.
     var corpo = window.document.body;
    corpo.style.background = 'black';
    */

    /* SELEÇÃO POR ID
    var d = window.document.getElementById('msg');
    d.style.background = 'red';
    sado para alterar a cor da div com id msg.
    */

   var d = document.querySelector('div#msg');
   d.style.color = 'red';
   /*SELEÇÃO PELA CLASSE ID
   Para isso usamos o document.querySelector('div#msg') , dentro de parenteses ( ) colocamos div#msg , que é a tag div e o id dessa div, que é #msg */



