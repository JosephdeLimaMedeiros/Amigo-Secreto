let amigos = [];

function adicionarAmigo(){
    let entrada = document.getElementById('amigo').value;
    if (entrada != ""){
        amigos.push(entrada);
        limparCaixa();
        adicionarNomesNaLista();
    } else { 
        alert("Por favor insira um nome válido.")
    }
    entrada = "";
}

function limparCaixa (){
    document.getElementById('amigo').value = '';
}

function adicionarNomesNaLista(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert('Não há nenhum amigo para sortear, adicione algum antes.')
    } else {
        let index = Math.floor(Math.random() * amigos.length);
        let nome = amigos[index];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = nome;  
    }
}