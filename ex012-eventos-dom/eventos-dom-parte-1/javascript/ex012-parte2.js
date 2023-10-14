//Todas as ações precisam acessar variávies, dentro ou fora das funções.
    /*Podemos ativar os events list através do html mas, podemos ativar de dentro do próprio javascript, que é o mais usado.*/
    var a = document.getElementById('area');
    a.addEventListener('mouseenter', entrar);
    a.addEventListener('click', clicar);
    a.addEventListener('mouseout', sair);
    /*Os addEventListener, vão ficar prestando a atenção nos eventos que ocorrem com a div.*/
    function entrar(){
        a.innerText = 'Entrou!';/*Dentro de aspas simples '' ou aspas duplas "" , é o texto que vai aparecer quando houver a entrada do mouse na div.*/
        a.style.background = 'blue';/* a.style.background = 'blue'; quando o cursor do mouse entrar na div, a div vai ficar azul.*/
    }
    function clicar(){
        a.innerText = 'Clicou!';/*
        a é referente a variável.
    innerText é uma propriedade no javascript que representa o contéudo textual "Renderizado" de um nó e seus descendentes.
    ''dentro de aspas simples ou duplas, é o texto que vai aparecer quando houver o click do mouse.*/
        a.style.background = 'red';/*a.style.background = 'red'; quando houver um click dentro da div, a div vai ficar vermelha.*/
    }
    function sair(){
        a.innerText = 'Saiu!';/*''dentro de aspas simples ou duplas, o texto saiu é o texto que vai aparecer quando houver a saida do mouse na div.*/
        a.style.background = 'green';/* 
        a.style.background = 'green'; a div vai ficar verde quando o cursor do mouse sair de dentro da div.*/
    }