let amigos = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let amigo = document.getElementById('amigo');
    if (amigo.value === '') {
        alert('Por favor, insira um nome');
    } else if (amigos.includes(amigo.value)){
        alert('Esse amigo já foi incluído');
    } else {
        if (resultado.innerHTML !== '') {
            alert('Amigo já foi sorteado, vamos remover seu amigo sorteado para sortear novamente');
            resultado.innerHTML = '';
        }
        amigos.push(amigo.value);
        //Discordo da solução proposta de percorrer a lista todas as vezes para exibir, pois
        //em uma lista muito grande, isso pode gerar problemas de performance da aplicação
        let itemLista = document.createElement('li');
        itemLista.textContent  = amigo.value;
        lista.appendChild(itemLista);
    }
    amigo.value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, insira pelo menos um nome')
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = amigos[numeroAleatorio];
    }
}