//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo () {
    let amigo = document.getElementById('amigo').value;
    console.log(`amigo: ${amigo}`)
    if (amigo ===  '') {
        alert('Informe o nome do amigo');
    } else {
        amigos.push(amigo);
    }
    amigo.value = '';
    adicionarAmigoLista();
}

function adicionarAmigoLista () {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    console.log(listaAmigos);
    
    for (let i = 0; i < amigos.length; i++) {
        let amigo = document.createElement('li');
        amigo.innerHTML = amigos[i];
        console.log(amigo);
        listaAmigos.append(amigo);
    }
}

function sortearAmigo () {
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    if (amigos == '') {
        console.log('O array está vazio!');    
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(amigos[indiceAleatorio]);
        let resultadoAmigo = document.createElement('li');
        resultadoAmigo.innerHTML = amigos[indiceAleatorio];
        resultado.appendChild(resultadoAmigo);
    }

    
}