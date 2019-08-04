var inputUser = document.querySelector('#user'); //Input

var botaoBuscar = document.querySelector('#buscar'); //Botão

botaoBuscar.addEventListener("click", function() {
    buscador(inputUser.value);
});

function buscador(user) {
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(response => {
            console.log(response) //Pode ser dessa maneira selecionando um id do array
        })
        .catch(error => {
            console.warn(error)
        });
}