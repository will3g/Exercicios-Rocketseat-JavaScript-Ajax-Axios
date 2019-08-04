var skills = ["Javascript", "ReactJS", "React Native"];

var botaoVerifica = document.querySelector("#verificar");

botaoVerifica.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#formulario");

    console.log(temHabilidade(skills, form.habilidade.value)); //Verificando se está retornando booleano. . . 
    console.log(skills);

});

function temHabilidade(skills, verificaHabilidade) {

    var compara = skills.indexOf(verificaHabilidade);

    if (compara === 1) {
        return true;
    }

    adicionaHabilidade(skills, verificaHabilidade);
    return false;
}

function adicionaHabilidade(skills, novaHabilidade) {
    skills.push(novaHabilidade);
}

// Desse modo abaixo podemos verificar se existe no array, caso não exista, o adicionamos:
//
// if (vegetais.indexOf(vegetal) === -1) {
//
//     vegetais.push(vegetal);
//     console.log('Nova coleção de vegetais é : ' + vegetais);
//
// } else if (vegetais.indexOf(vegetal) > -1) {
//
//     console.log(vegetal + ' já existe na coleção de vegetais.');
//
// }
//