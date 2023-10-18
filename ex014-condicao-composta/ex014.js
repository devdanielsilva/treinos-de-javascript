function calcular() {
  let país = document.querySelector("input#txtpaís").value;/*O atributo value para definir o valor enviado por este item. Use o atributo checked para indicar se o item está selecionado por padrão. O value é a informação que será enviado pro servidor.*/

  let res = document.querySelector("div#res");
  /*Aspas com crase, podemos concatenar com a variável usando o símbolo de cifrão $ e sinais de chaves, {} Abre chaves e fecha chaves. E fica assim: ${Nome da Variável aqui dentro}; */
  /*Condição Composta - Com IF e ELSE. */

  if (país != "Brasil") {
    /*SE. != É sinal de diferente.
    Ao utilizar o sinal de diferente != , a mensagem que vai para o usuário no IF , vai inverte a mensagem de você é Brasileiro(a) para você é Estrangeiro e no ELSE ,também inverte, vai a mensagem de você é Brasileiro(a).*/
    
    res.innerHTML = "<p>Você é <strong>Estrangeiro(a)</strong>!</p>"; //Mensagem para Estrangeiros.
  } else {
    //SENÃO
    res.innerHTML = `Você é <strong>Brasileiro(a)</strong>!`; //Mensagem para brasileiro.
    /*O += é para concatenar a mensagem Você é Brasileiro com a variável res ,que é a variável da div da resposta. */
  }
}
/*Erro na parte do if else, Se for Brasil mostra estrangeiro e se for estrangeiro mostra brasileiro. WTF */
