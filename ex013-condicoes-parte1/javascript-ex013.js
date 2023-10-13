/*A variável dentro da função, somente essa função pode acessar a variável, os valores dela. */
function calcular() {
    var txtv = document.querySelector('input#txtvel');
    var res = document.querySelector('div#res')//Para acessar o id no querySelector, se usa o #
    //Id usa # e Class se usa o . ponto
    var vel = Number(txtv.value);
    res.innerHTML = `<br><p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`;//O innerHTML pode ser usado para receber o conteúdo de um elemento HTML ou para definir um novo conteúdo para ele. Para isso, podemos utilizar a sintaxe do DOM (document. getElement) para realizar essas ações através do JavaScript.

    /*ESTRUTURA DE CONDIÇÃO SIMPLES, APENAS COM IF (SE). */
    if(vel > 60){
        res.innerHTML += '<br><p>Você está <strong>MULTADO</strong> por excesso de velocidade.</p>';
    } 
    res.innerHTML += `<br><p>Dirija sempre com <strong>cinto</strong> de segurança!</p>`;
}