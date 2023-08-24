/*Para ter o alert mostrando junto de um prompt, basta declarar a variável sinal de recebe = prompt('Mensagem para o usuário digitar o nome dele, aqui dentro.'); coloca um alert logo depois do comando de prompt. alert('Mensagem que o usuário irá ver, vai aqui dentro.' + nome da variável que recebeu o nome do usuário + sinal de exclamação '!');
como mostra logo abaixo.*/
var saudacao = prompt('Digite seu nome'); 
alert('Bem-vindo a aula de operadores parte 2. ' + saudacao + '!');


//A idade está entre 15 e 17?
idade >= 15 && idade <= 17

//A cidade está entre São Paulo e Rio de Janeiro?
estado == 'SP' || estado == 'RJ'

//O salário é acima de 1500 e não é homem?

salario > 1500 && sexo != 'M'
/*O salário é maior que 1500 e sexo é diferente de Masculino*/