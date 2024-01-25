function verificar() {
  var data = new Date(); //new Date - É para o Dia atual que o script for executado.

  var ano = data.getFullYear(); //data.getFullYear - é para o ano em que o script for executado, ou seja, o ano atual.

  var fano =
    document.getElementById(
      "txtano"
    ); /*fano é o ano que vem do formulário do HTML, e o txtano é o id do do input de ano, onde o usuário vai digitar. */

  var res =
    document.querySelector(
      "div#res"
    ); /*No querySelector('div#res') vai chamar a div com id res de resultado. E querySelector é para o seletor da div res.*/

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    /*value.length - Verifica se a caixa está vazia e se o comprimento da caixa é = 0
  O Number server para conversão de dados, nesse caso numéricos.*/

    window.alert(
      "[ERRO] Verifique os dados e tente novamente!"
    ); /*Se o ano atual for 0 ou maior que ano atual, aparecerá essa mensagem para o usuário. Utilizando isso, fazemos uma Micro validação inicial. */
  } else {
    var fsex = document.getElementsByName("radsex"); //radsex é o name dos inputs de gênero Masculino e Feminino.

    var idade = ano - Number(fano.value);
    /*A idade é o valor do ano atual - menos o valor do ano digitado no fano. */

    var genero = "";
    //As aspas duplas vazias, são para que o usuário possa fazer a escolha dele, entre Masculino e Feminino.

    /*Abaixo são 2 tags para criar fotos dinâmicamente. Tem várias maneiras a debaixo é uma delas. */

    var img = document.createElement("img");
    /*O Elemento img é como se fosse colocar a tag img no HTML, ele cria uma tag img. */

    img.setAttribute("id", "foto");
    /* As tags para criar um elemento para imagem, é como se fossemos no HTML e digitassemos a tag img com o id foto.---------------------------------------- */
    if (fsex[0].checked) {
      //fsex 0 é a bolinha do Masculino.
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Se não tiver entre 0 e 10, ele está acima de 10.

        //Criança

        //img.setAttribute("src", "homem-criança.png"); assim não funcionou.

        /*img.setAttribute("src", "homem-criança.jpg"); Serve para carregar imagem, é como se fosse a tag img no HTML, <img src="" alt="" srcset=""> */

        img.src = "imagens/homem-criança.png";
      } else if (idade < 30) {
        //Jovem
        /*document.getElementById("imagem").innerHTML =
          "<img src= 'Imagens/homem-jovem.png' width= '250px' >"; 
          TENTATIVA DE MOSTRAR IMAGEM NA PÁGINA*/
        //img.setAttribute("src","homem-criança.png" );
        img.src = "imagens/homem-jovem.png";
      } else if (idade < 50) {
        //Adulto
        //img.setAttribute("src", "homem-adulto.png");
        img.src = "imagens/homem-adulto.png";
      } else {
        img.src = "imagens/homem-idoso.png";
        //Idoso
      }
    } else if (fsex[1].checked) {
      //fsex 1 é a bolinha do Feminino.
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.src = "imagens/mulher-criança.png";
      } else if (idade < 30) {
        /*Invés de colocar (idade >= 10 && idade < 29) ,colocamos (idade <29), porque é uma questão de lógica. Se não está if, entre 0 && 10, ou seja, está acima de 10.*/

        //Jovem
        img.src = "imagens/mulher-jovem.png";
      } else if (idade < 50) {
        //Adulto
        img.src = "imagens/mulher-adulta.png";
      } else {
        //Idoso
        img.src = "imagens/mulher-idosa.png";
      }
    }
    res.style.textAlign = "center";
    /*Para centralizar a mensagem de resposta para o usuário. */

    res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`;
    //Mostrar a mensagem e concatenar variáveis juntos da mensagem.

    res.appendChild(img);
    /*res.appendChild('img'); Serve para colocar um elemento img, depois de um elemento innerHTML, que é um elemento para textos. */
  }
}
