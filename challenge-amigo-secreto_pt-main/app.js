//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let indiceLimite = listaAmigos.length;

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if (amigo == ""){
        return error;
    }else{
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        let mensagem = `${listaAmigos}`;
        exibirTexto('ul.name-list', mensagem);
        limpar();
        return listaAmigos;
    }
   
}

function sortearAmigo(){
    if (!listaAmigos){
        alert("Coloque um nome de usuário válido!");
    }else{
        let sorteado = parseInt(Math.random() * indiceLimite + 1);
        let resultado = listaAmigos[sorteado];
        exibirTexto('ul.name-list', "");
        let mensagem = `O amigo secreto sorteado é: ${resultado}!`;
        exibirTexto('ul.result-list', mensagem);
    } 
}

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limpar(){
    chute = document.querySelector('input');
    chute.value = '';
}
