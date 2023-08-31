/*Se quisermos mostrar coisas na tela com o window.document.white(window.navigator.appName); 
Que serve para mostrar o nome do navegador que você está usando. */
window.document.write(window.navigator.appName) ; //Mostra o nome do navegador
 "<hr>";

/* */
window.document.write(window.document.URL); //Mostra a URL do site.

var p1 = document.getElementsByName('p')[0];
/*A variável acima está selecionando o primeiro parágrafo, por meio de colchetes [0] dentro de colchetes, colocamos o número que corresponde a posição do parágrafo. */

window.document.write('Está escrito assim: ' + p1.innerText); /*document.write(); serve para escrever na tela, o texto do parágrafo selecionado. */