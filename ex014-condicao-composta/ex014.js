function calcular() {

let país = document.querySelector('input#txtpais');
let result = document.querySelector('div#res');
let but = Text(país.value);

    result.innerHTML = `<br><p>Vivendo em <strong>${país} .</strong> </p>`;/*Aspas com crase, podemos concatenar com a variável usando o símbolo de cifrão $ e sinais de chaves, {} Abre chaves e fecha chaves. E fica assim: ${Nome da Variável aqui dentro}; */
/*Condição Composta - Com IF e ELSE. */

    if(país != 'Brasil'){/*SE. != É sinal de diferente.
    Ao utilizar o sinal de diferente != , a mensagem que vai para o usuário no IF , vai inverte a mensagem de você é Brasileiro(a) para você é Estrangeiro e no ELSE ,também inverte, vai a mensagem de você é Brasileiro(a).*/
    result.innerHTML += 'Você é <strong>Brasileiro(a)</strong>!';//Mensagem para Brasileiros.
    } else {//SENÃO
    result.innerHTML += 'Você é <strong>Estrangeiro(a)</strong>!';//Mensagem para Estrangeiro.
    }
    }