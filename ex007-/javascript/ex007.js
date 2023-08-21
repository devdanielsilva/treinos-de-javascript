/*Para chamar uma função, o function com o nome da função e parenteses na frete do nome da função.
EXEMPLO: 
funcion minhaFuncao(){
    alert("Olá, Mundo!");
}*/

function minhaFuncao(){
    alert("Olá, Mundo!");
}


/*Abaixo um script pedindo para o usuário inserir 3 números e informar para o usuário, qual é o maior entre eles.*/
var numero01 = parseInt(prompt("Digite o primeiro número: "));
var numero02 = parseInt(prompt("Digite o segundo número: "));
var numero03 = parseInt(prompt("Digite o terceiro número: "));
if((numero01 > numero02) && (numero01 > numero03)) mensagem = "O primeiro número informado é maior!";
else
if((numero02 > numero01) && (numero02 > numero03)) mensagem = "Osegundo número!";
else
if((numero03 > numero01) && (numero03 > numero02)) mensagem = "O terceiro número é maior!";
else
mensagem = "Os números são iguais ou nada foi informado";
alert(mensagem);
