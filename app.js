//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let amigoInput = document.querySelector('.button-add');
let listaAmigos = document.getElementById('listaAmigos');
let amigo = document.querySelector('#amigo');
let resultado = document.querySelector('#resultado');


amigo.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		adicionarAmigo();
		amigo.value = '';
	} 
	event.stopPropagation();
  });

function adicionarAmigo () {
	let valorAmigo = amigo.value;
	if (valorAmigo === '') {
		alert('Informe o nome do Amigo a ser adicionado!')
	} else {
		// Verifica se o valorAmigo que se quer adicionar já está na lista, se sim, lança um erro, se não adiciona o valorAmigo à lista
		if (amigos.includes(valorAmigo)) {
      alert(`${valorAmigo} já está na lista!`);
			throw new Error('Amigo já está na lista!');
		} else {
			amigos.push(valorAmigo);
		}
	}
	amigo.value = '';
	adicionarAmigoLista();
}

function adicionarAmigoLista () {
    listaAmigos.innerHTML = '';
    console.log(listaAmigos);

    for (let i = 0; i < amigos.length; i++) {
	let amigoListado = document.createElement('li');
	amigoListado.innerHTML = `${amigos[i]}`;
	console.log(amigoListado);
	listaAmigos.append(amigoListado);
    }
}

function sortearAmigo () {
	resultado.innerHTML = '';
	if (amigos == '') {
		alert('A lista está vazia!');
	} else {
		let indiceAleatorio = Math.floor(Math.random() * amigos.length);
		console.log(amigos[indiceAleatorio]);
		let resultadoAmigo = document.createElement('li');
		resultadoAmigo.innerHTML = amigos[indiceAleatorio];
		resultado.appendChild(resultadoAmigo);
		}
// Trunca a lista para que se adicionem novos valores
amigos.length = 0;
// Apaga a lista dos amigos
listaAmigos.innerHTML ='';		
}

function reiniciarSorteio() {
  resultado.innerHTML = "";
}