axios.get('https://api-pacientes.herokuapp.com/pacientes')
    .then(response => {
        console.log(response.data[3]) //Pode ser dessa maneira selecionando um id do array
    })
    .catch(error => {
        console.warn(error)
    });

axios.get('https://api-pacientes.herokuapp.com/pacientes')
    .then(response => {
        console.log(response) //Pode ser dessa maneira selecionando todos os dados
    })
    .catch(error => {
        console.warn(error)
    });

/*
//Sem AXIOS:
// var minhaPromise = function() {

//     return new Promise(function(resolve, reject) {

//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
//         xhr.send(null);

//         xhr.onreadystatechange = function() {

//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Erro na requisição!');
//                 }
//             }
//         }
//     });
// }

// minhaPromise()
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
*/