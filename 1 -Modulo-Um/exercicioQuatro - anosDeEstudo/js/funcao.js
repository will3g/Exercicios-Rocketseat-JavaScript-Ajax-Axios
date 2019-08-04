var botaoCalculaXP = document.querySelector("#calcula");

botaoCalculaXP.addEventListener("click", function(event) {

    var form = document.querySelector("#formulario");

    experiencia(form.tempoEstudo.value, event);
});

function experiencia(form, event) {
    event.preventDefault();
    if ((form >= 0) && (form <= 1)) console.log("iniciante");
    if ((form > 1) && (form <= 3)) console.log("Intermediário");
    if ((form > 3) && (form <= 6)) console.log("Avançado");
    if (form >= 7) console.log("Jedi Master");
}

//var anosEstudo = 7;
//experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master