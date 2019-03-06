var computadorEscolha = -1;
var jogadorEscolha = -1;
var ganhador = -1;
var pontosParaGanhar = 5;

function jogar(escolha){
    computadorEscolha = Math.floor(Math.random() * (3-1 + 1) + 1); // Random entre 1 e 3;
    jogadorEscolha = escolha;

    ganhador =  EncontraGanhador(jogadorEscolha, computadorEscolha);

    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add("selecionado");
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add("selecionado");

    // Verifica quem fez ponto
    if(ganhador == 0){
        document.getElementById("mensagen").innerHTML = 'Empate';
    }else if(ganhador == 1){
        document.getElementById("mensagen").innerHTML = 'O jogador ' +  document.getElementById('jogador-nome').innerHTML + ' ganhou';
        document.getElementById("jogador-pontos").innerHTML = parseInt(document.getElementById("jogador-pontos").innerHTML) + 1;
    }else{
        document.getElementById("mensagen").innerHTML = 'O computador ganhou';
        document.getElementById("computador-pontos").innerHTML = parseInt(document.getElementById("computador-pontos").innerHTML) + 1;
    }

    // Verifica se alquem ganhou
    if(parseInt(document.getElementById("jogador-pontos").innerHTML) == pontosParaGanhar){
        NovoJogo();
        document.getElementById("mensagen").innerHTML = ' Parabéns ' + document.getElementById('jogador-nome').innerHTML + ', você ganhou o jogo!';
    }else if(parseInt(document.getElementById("computador-pontos").innerHTML) == pontosParaGanhar){
        NovoJogo();
        document.getElementById("mensagen").innerHTML = ' ahh que pena :(\n O computador ganhou o jogo!\n Click em novo jogo para jogar novamente!';
    }else{
        setTimeout(() => {
            document.getElementById("mensagen").innerHTML = '...';
            document.getElementById("jogador-escolha-" + jogadorEscolha).classList.remove("selecionado");
            document.getElementById("computador-escolha-" + computadorEscolha).classList.remove("selecionado");
        }, 800);
    }

}

function EncontraGanhador(jogadorEscolha, computadorEscolha){
    var ganhador = -1;

    // 1- Pedra 2- Papel 3- Tesoura;
    if(jogadorEscolha == computadorEscolha){
        ganhador = 0;
    }else if(jogadorEscolha == 1 && computadorEscolha == 2){
        ganhador = 2;
    }else if(jogadorEscolha == 1 && computadorEscolha == 3){
        ganhador = 1;
    }else if(jogadorEscolha == 2 && computadorEscolha == 1){
        ganhador = 1;
    }else if(jogadorEscolha == 2 && computadorEscolha == 3){
        ganhador = 2;
    }else if(jogadorEscolha == 3 && computadorEscolha == 1){
        ganhador = 2;
    }else if(jogadorEscolha == 3 && computadorEscolha == 2){
        ganhador = 1;
    }

    return ganhador;
}

function NovoJogo(){
    document.getElementById("jogador-pontos").innerHTML = 0;
    document.getElementById("computador-pontos").innerHTML = 0;
    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.remove("selecionado");
    document.getElementById("computador-escolha-" + computadorEscolha).classList.remove("selecionado");
    document.getElementById("mensagen").innerHTML = '...';
}