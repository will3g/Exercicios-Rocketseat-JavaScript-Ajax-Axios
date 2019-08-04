var botaoResultado = document.querySelector("#resultado-operacao");
botaoResultado.addEventListener("click", function(event) {

    var form = document.querySelector("#formulario");

    if (form.valorUm.value != "" && form.valorDois.value != "") {
        event.preventDefault();
        calcula(form.valorUm.value, form.valorDois.value);

    } else {
        console.log("Insira os valores");
    }
});

function calcula(valor1, valor2) {

    for (var i = valor1; i <= valor2; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}