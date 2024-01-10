function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    //Bom Dia!
    document.body.style.background = "#e2cd9f";
    msg.innerHTML += " Tenha um Bom Dia!";
    img.src = "imagens/Manhã.jpg";
  } else if (hora >= 12 && hora <= 17) {
    //Boa Tarde!
    document.body.style.background = "#b9846f";
    msg.innerHTML += " Boa Tarde!";
    img.src = "imagens/Tarde.jpg";
  } else {
    //Boa Noite!
    document.body.style.background = "#515154";
    msg.innerHTML += " Boa Noite!";
    img.src = "imagens/Noite.jpg";
  }
}
