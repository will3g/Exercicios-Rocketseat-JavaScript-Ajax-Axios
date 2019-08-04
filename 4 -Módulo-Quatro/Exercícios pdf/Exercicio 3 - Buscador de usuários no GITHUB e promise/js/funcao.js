var erroAjax = document.querySelector('#erro-ajax'); //Span
var sucessoAjax = document.querySelector('#sucesso-ajax'); //Span

var inputUser = document.querySelector('#user'); //Input
var botaoBuscar = document.querySelector('#buscar'); //Botão

var ul = document.querySelector('ul'); // ul

botaoBuscar.addEventListener("click", function() {

    buscador(inputUser.value);
});

function renderizaLista(repositorios) {

    repositorios.forEach(repositorio => {

        var li = document.createElement('li');
        var link = document.createElement('a');
        link.href = repositorio.html_url;

        var nomeRepositorio = document.createTextNode(repositorio.name);

        link.appendChild(nomeRepositorio);
        li.appendChild(link);
        ul.appendChild(li);
    });
}

function buscador(user) {

    setTimeout(function() {

        axios.get('https://api.github.com/users/' + user + '/repos')
            .then(response => {
                erroAjax.classList.add('invisivel'); //Adiciona a estilização da frase erro
                sucessoAjax.classList.remove('invisivel'); //Remove invisibilidade da frase sucesso
                sucessoAjax.classList.add('mensagemSucesso'); //Adiciona a estilização da frase sucesso

                renderizaLista(response.data); //   CHAMADA DO MÉTODO -> renderizaLista(repositorios){ ... };

                // console.log(response) //Pode ser dessa maneira selecionando um id do array
            })
            .catch(error => {
                sucessoAjax.classList.add('invisivel'); //Adiciona invisibilidade da frase sucesso

                erroAjax.classList.remove('invisivel'); //Remove invisibilidade da frase erro
                erroAjax.classList.add('mensagemErro'); //Adiciona a estilização da frase erro
                //console.warn(error)
            });
    }, 2000);
}