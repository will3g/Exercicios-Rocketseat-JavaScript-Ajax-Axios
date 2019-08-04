//Leitura do código - Início
//
//Variáveis globais
var input = document.querySelector("#entrada");
var lista = document.querySelector("#app ul");
var botaoAdicionar = document.querySelector("#adicionar");


//Dados
var todos = JSON.parse(localStorage.getItem('salva_lista')); //Busca os dados no local storage

//Funções
function renderTodos() {

    lista.innerHTML = ''; //Sempre que iniciar vai resetar a lista e gerar uma nova

    for (todo of todos) { //Para cada
        //Colocando texto do array e input dentro de suas 'li'
        var todoElemento = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //Link para excluir todo
        var linkElemento = document.createElement('a');
        linkElemento.setAttribute('href', '#');

        //Pegando a posição do item no array
        var posicao = todos.indexOf(todo); //O indexOf + for setam a posição do item, a cada chamanda essa posição muda
        linkElemento.setAttribute("onclick", "deleteItem(" + posicao + ")"); //Aqui chamamos a função deleteItem(posicao) para quando clicado ser excluido

        var link = document.createTextNode("Excluir"); //Cria o texto excluir para o link

        linkElemento.appendChild(link); //Colocando o texto Excluir dentro do link 'a'
        todoElemento.appendChild(todoText); //Colocando texto dentro da 'li'
        todoElemento.appendChild(linkElemento); //Colocando o link 'a' dentro do 'li'
        lista.appendChild(todoElemento); //Colocando geral na lista 'ul'
    }
}

function adicionar() {
    //Adiciona um novo item a lista por meio do input
    var texto = input.value;
    todos.push(texto);
    input.value = '';
    renderTodos();
    salvaDados();
}

function salvaDados() { //Salva os dados no local storage [ UM ARQUIVO JSON ]

    // localStorage.setItem( [ Nome que você preferir ] , [ JSON.stringify( array ) ] );
    localStorage.setItem('salva_lista', JSON.stringify(todos)); //SON.stringify(todos). O stringify converte para JSON
}

//Chamando funções
renderTodos();

function deleteItem(posicao) {
    todos.splice(posicao, 1);
    renderTodos();
    salvaDados();
}

//Botão Adicionar chama a função adicionar()
botaoAdicionar.addEventListener("click", function() {
    if (input.value != "") {
        adicionar();
    }
});