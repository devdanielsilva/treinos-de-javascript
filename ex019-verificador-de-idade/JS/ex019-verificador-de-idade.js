function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res =
    document.querySelector(
      "div#res"
    ); /*No querySelector('div#res') vai chamar a div com nome res de resultado. */
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";

    /*Abaixo são 2 tags para criar fotos dinâmicamente. Tem várias maneiras a debaixo é uma delas. */
    var img =
      document.createElement(
        "img"
      ); /*O Elemento img é como se fosse colocar a tag img no HTML, ele cria uma tag img. */
    img.setAttribute("id", "foto");
    /* As tags para criar um elemento para imagem, é como se fossemos no HTML e digitassemos a tag img com o id foto.---------------------------------------- */
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Se não tiver entre 0 e 10, ele está acima de 10.
        //Criança

        //img.setAttribute("src", "homem-criança.png"); /*img.setAttribute("src", "homem-criança.jpg"); Serve para carregar imagem, é como se fosse a tag img no HTML, <img src="" alt="" srcset=""> */
        img.src = "imagens/homem-criança.png";
      } else if (idade < 30) {
        //Jovem
        //img.setAttribute("src", "homem-jovem.png");
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
    res.style.textAlign =
      "center"; /*Para centralizar a mensagem de resposta para o usuário. */
    res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`;
    res.appendChild(
      img
    ); /*res.appendChild('img'); Serve para colocar um elemento img, depois de um elemento innerHTML, que é um elemento para textos. */
  }
}
