var listaEnderecos = [];

var botaoAdicionar = document.querySelector("#adicionar-endereco");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#formulario");

    var dadosEndereco = endereco(form);

    var erros = validaCampos(dadosEndereco);

    console.log("Fui clicado!");

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    listaEnderecos.push(dadosEndereco);

    form.reset();

    console.log(listaEnderecos);

    exibeConsole(listaEnderecos);
});

function exibeConsole(listaEnderecos) {

    listaEnderecos.forEach(item => {

        console.log(
            "O " + item.nome +
            " é do estado de " + item.estado +
            ", residente na cidade de " + item.cidade +
            ". O seu CEP é " + item.cep +
            " no bairro de " + item.bairro +
            ". Seu número residencial é " + item.numero +
            " e seu telefone para contato é " + item.telefone + "."
        );
    });
}


//Lista dinâmica
function endereco(form) {

    var endereco = {
        nome: form.nome.value,
        estado: form.estado.value,
        cidade: form.cidade.value,
        cep: form.cep.value,
        bairro: form.bairro.value,
        numero: form.numero.value,
        telefone: form.telefone.value
    };

    return endereco;
}

function validaCampos(dadosEndereco) {

    var erros = [];

    if (dadosEndereco.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (dadosEndereco.estado.length == 0) {
        erros.push("O estado não pode ser em branco");
    }

    if (dadosEndereco.cidade.length == 0) {
        erros.push("A cidade não pode ser em branco");
    }

    if (dadosEndereco.cep.length == 0) {
        erros.push("O CEP não pode ser em branco");
    }

    if (dadosEndereco.bairro.length == 0) {
        erros.push("O bairro não pode ser em branco");
    }

    if (dadosEndereco.numero.length == 0) {
        erros.push("O número não pode ser em branco");
    }

    if (dadosEndereco.telefone.length == 0) {
        erros.push("O telefone não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}