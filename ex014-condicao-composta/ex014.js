var país = prompt('De que país você é? ');
document.write(`Vivendo em ${país}. `);/*Aspas com crase, podemos concatenar com a variável usando o símbolo de cifrão $ e sinais de chaves, {} Abre chaves e fecha chaves. E fica assim: ${Nome da Variável aqui dentro}; */
/*Condição Composta - Com IF e ELSE. */

if(país != 'Brasil'){/*SE. != É sinal de diferente.
Ao utilizar o sinal de diferente != , a mensagem que vai para o usuário no IF , vai inverte a mensagem de você é Brasileiro(a) para você é Estrangeiro e no ELSE ,também inverte, vai a mensagem de você é Brasileiro(a).*/
    document.write('Você é Estrangeiro(a)!');//Mensagem para Estrangeiro.
} else {//SENÃO
    document.write('Você é Brasileiro(a)!');//Mensagem para Brasileiros.
}