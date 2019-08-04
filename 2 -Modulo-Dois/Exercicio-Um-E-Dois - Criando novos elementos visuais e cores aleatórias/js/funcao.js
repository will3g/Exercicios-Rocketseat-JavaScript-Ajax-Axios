var botaoExibir = document.querySelector("#novo");
var boxElemento = document.querySelector(".box");

botaoExibir.addEventListener("click", function() {
    cria();
});

function getRandomColor() { //gera função aleatória

    var caracteres = "0123456789ABCDEF"; //caracteres hexadecimais
    var cor = "#"; //começo do selecionador de cor 
    // cor = { [#] + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F] };

    //faz a função para gerar o valor aleatório para setar a cor
    for (let i = 0; i < 6; i++) {
        cor += caracteres[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function cria() {

    var novoQuadrado = document.createElement('div'); //Cria uma nova div para o novo quadrado

    novoQuadrado.style.width = '100px'; //Pode ser px, em, %
    novoQuadrado.style.height = '100px';
    novoQuadrado.style.backgroundColor = '#F00';

    novoQuadrado.onmouseover = function() {
        novoQuadrado.style.backgroundColor = getRandomColor();
    }

    boxElemento.appendChild(novoQuadrado); //Adiciona um novo .box na div criando um novo quadrado
}