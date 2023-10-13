var país = prompt('De que país você é? ');
document.write(`Vivendo em ${país}. `);/*Aspas com crase, podemos concatenar com a variável usando o símbolo de cifrão $ e sinais de chaves, {} Abre chaves e fecha chaves. E fica assim: ${Nome da Variável aqui dentro}; */
/*Condição Composta - Com IF e ELSE. */
if(país == 'Brasil'){//SE
    document.write('Você é Brasileiro(a)!');//Mensagem para Brasileiros.
} else {//SENÃO
    document.write('Você é Estrangeiro(a)!');//Mensagem para Estrangeiro.
}