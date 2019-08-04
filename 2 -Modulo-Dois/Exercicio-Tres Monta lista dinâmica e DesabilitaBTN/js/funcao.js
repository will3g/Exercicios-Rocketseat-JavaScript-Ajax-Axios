var elementoPai = document.querySelector(".container"); //Elemento pai BODY 

var botaoExibe = document.querySelector("#verificar");
botaoExibe.addEventListener("click", function click(e) {

    console.log("Clicado!");
    var nomes = ["Diego", "Gabriel", "Lucas"];
    listaDinamica(nomes);

    botaoExibe.removeEventListener("click", click); //Essa linha serve para executar a função uma única vez!

    // Com JQuery fica:
    // $('#button').one('click', function (e) {
    //   Executa somente essa vez, não mais que isso
    // });

    //onclick="verificar.disabled=true;" no HTML desabilita o botão depois de clicado
});

function listaDinamica(nomes) {

    var ul = document.createElement('ul'); //Cria o elemento pai da lista

    nomes.forEach(nome => {
        var li = document.createElement('li'); //Cria o elemento filho da lista
        var texto = document.createTextNode(nome); //Adiciona os Nomes do array no novo elemento criado
        li.appendChild(texto); //Adiciona o texto[Nome] no li
        ul.appendChild(li); //Adiciona o li no ul
    });

    elementoPai.appendChild(ul); //Por fim o laço forEach acaba e adiciona a ul dentro do elemento pai BODY
}