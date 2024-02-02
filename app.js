let listaDeNumberosSorteados = [];
let numeroLimite = 100;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function textoinicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
textoinicial();

function verificarChute() {
    let chute= document.querySelector('input').value;
    if ( chute == numerosecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let singulartentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${singulartentativa}.`;
        exibirTextoNaTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numerosecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparinput();
    }
}
 function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosa = listaDeNumberosSorteados.length;

    if (quantidadeDeNumerosa == numeroLimite){
        listaDeNumberosSorteados = [];
    }

    if (listaDeNumberosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumberosSorteados.push(numeroEscolhido);
        console.log(listaDeNumberosSorteados)
        return numeroEscolhido;
    }
 }
 function limparinput(){
    chute = document.querySelector('input');
    chute.value = '';
 }
function reiniciarjogo(){
    numerosecreto = gerarNumeroAleatorio();
    limparinput();
    tentativas = 1;
    textoinicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



