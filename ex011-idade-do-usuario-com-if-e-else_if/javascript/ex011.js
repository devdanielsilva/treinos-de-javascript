var idade = parseInt(prompt('Digite sua idade')); //Variável que vai receber a idade do usuário.
if(idade <= 17){//if = se for menor de idade, exibir texto.
    document.write('Você é menor de idade!');
}else if(idade >= 18){//else if = senão for menor de idade exibir mesangem.
    document.write('Você é maior de idade, e você já pode ser preso');
}