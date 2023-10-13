/*A variável dentro da função, somente essa função pode acessar a variável, os valores dela. */
function calcular() {
    let txtv = document.querySelector('input#txtvel');
    let res = document.querySelector('div#res')//Para acessar o id no querySelector, se usa o #
    //Id usa # e Class se usa o . ponto

    let vel = Number(txtv.value);//Usar let é melhor pois, se em um programa maior você acidentalmente declarar a mesma variável 2 ou mais vezes, você vai saber desse erro. O let te dá esses erros, diferente do var que não faz isso.

    res.innerHTML = `<br><p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`;//O innerHTML pode ser usado para receber o conteúdo de um elemento HTML ou para definir um novo conteúdo para ele. Para isso, podemos utilizar a sintaxe do DOM (document. getElement) para realizar essas ações através do JavaScript.

    /*ESTRUTURA DE CONDIÇÃO SIMPLES, APENAS COM IF (SE). */
    if(vel > 60){
        res.innerHTML += '<br><p>Você está <strong>MULTADO</strong> por excesso de velocidade.</p>';
    } 
    res.innerHTML += `<br><p>Dirija sempre com <strong>CINTO</strong> de segurança!</p>`;
}