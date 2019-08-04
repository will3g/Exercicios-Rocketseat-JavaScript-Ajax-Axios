var botaoChecar = document.querySelector('#checar');
var entradaIdade = document.querySelector('#entradaIdade');

botaoChecar.addEventListener("click", function() {
    checaIdade(entradaIdade.value);
});

function checaIdade(idade) {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (entradaIdade.value != "")
                return idade >= 18 ? resolve(idade) : reject();
        }, 2000);
    });

}

checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });