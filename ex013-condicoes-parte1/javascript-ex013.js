/*A variável dentro da função, somente essa função pode acessar a variável, os valores dela. */
function calcular(){
    var txtv = document.querySelector('input#txtvel');
    var res = document.querySelector('div#res')//Para acessar o id no querySelector, se usa o #
    //Id usa # e Class se usa o . ponto
    var vel = Number(txtv.value);
    res.innerHTML = 'Sua vlocidade atual é de ${vel}';
}

alert(`A velocidade do seu Carro é ${velocidade}Km/h`);
if (velocidade < 15){
    alert("Velocidade Normal! Dirija Sempre com cautela.");
}else if(velocidade > 60){
    alert("Você está acima da Velocidade! VOCÊ ESTÁ MULTADO!");
}