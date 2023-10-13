function somar(){/*Função somar, para somar dois números.*/
            var tn1 = document.getElementById('txtn1');/*Variável da caixa de texto n1. document.getElementById('txtn1') é para fazer a ligação com caixa n1, através do id da caixa n1.*/
            var tn2 = document.querySelector('input#txtn2');/*Variável da caixa de texto n2. document.querySelector('input#txtn2') é para fazer a ligação com caixa n2, através do seletor da caixa n2.*/
            var res = document.getElementById('res');/*Variável de resultado, que vai fornecer o resultado final da soma. */

            /*Precisamos ter variáveis para os números, pois todos valor que vier das caixas de texto, ele étexto e precisamos especificar que o tipo de dados é número.*/
            var n1 = Number(tn1.value);/*Variável que vai receber o primeiro número da soma.*/
            var n2 = Number(tn2.value);/*Variável que vai receber o segundo número da soma.*/
            var s = n1 + n2;/*Variável que vai fazer a soma dos números.*/
            res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`/*Irar mostrar um texto falando dos número digitados e no valor dessa soma.Sinal de $ cifrão, é para concatenar a variável.*/
        }