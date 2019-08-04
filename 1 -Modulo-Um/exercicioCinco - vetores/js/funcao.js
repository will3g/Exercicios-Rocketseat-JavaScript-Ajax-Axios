var usuarios = [{

        nome: "William",
        habilidades: ["JavaScript", "GIT", "Docker"]
    },
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

var botaoConcatena = document.querySelector("#contatena");

botaoConcatena.addEventListener("click", function() {
    console.log("Fui clicado!");
    var span = document.querySelector("#span");
    span = formatacao(usuarios);
});

function formatacao(usuarios) {

    for (usuario of usuarios) {

        var nome = usuario.nome;
        var habilidade = usuario.habilidades.join(", ");

        console.log("O " + nome + " possui as habilidades: " + habilidade);

    }
}