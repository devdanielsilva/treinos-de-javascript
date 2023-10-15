function calcular() {
  let país = document.querySelector('input#txtpaís');
  let res = document.querySelector('div#res');
  /*Aspas com crase, podemos concatenar com a variável usando o símbolo de cifrão $ e sinais de chaves, {} Abre chaves e fecha chaves. E fica assim: ${Nome da Variável aqui dentro}; */
  /*Condição Composta - Com IF e ELSE. */

  if (país != 'Brasil') {
    /*SE. != É sinal de diferente.
    Ao utilizar o sinal de diferente != , a mensagem que vai para o usuário no IF , vai inverte a mensagem de você é Brasileiro(a) para você é Estrangeiro e no ELSE ,também inverte, vai a mensagem de você é Brasileiro(a).*/
    res.innerHTML += 'Você é <strong>Estrangeiro(a)</strong>!'; //Mensagem para Estrangeiros.
  } else {
    //SENÃO
    res.innerHTML += 'Você é <strong>Brasileiro(a)</strong>!'; //Mensagem para brasileiro.
  }
}
