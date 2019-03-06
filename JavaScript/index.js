var computadorEscolha = -1;
var jogadorEscolha = -1;
var ganhador = -1;

function jogar(escolha){
    computadorEscolha = Math.floor(Math.random() * (3-1 + 1) + 1);
    jogadorEscolha = escolha;

    

    ganhador =  EncontraGanhador(jogadorEscolha, computadorEscolha);

    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add("selecionado");
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add("selecionado");


    if(ganhador == 0){
        document.getElementById("mensagens").innerHTML = 'Empate';
    }else if(ganhador == 1){
        document.getElementById("mensagens").innerHTML = 'O jogador Marcelo ganhou';
        document.getElementById("jogador-pontos").innerHTML = parseInt(document.getElementById("jogador-pontos").innerHTML) + 1;
    }else{
        document.getElementById("mensagens").innerHTML = 'O computador ganhou';
        document.getElementById("computador-pontos").innerHTML = parseInt(document.getElementById("computador-pontos").innerHTML) + 1;
    }

    setTimeout(() => {
        document.getElementById("mensagens").innerHTML = '...';
        document.getElementById("jogador-escolha-" + jogadorEscolha).classList.remove("selecionado");
        document.getElementById("computador-escolha-" + computadorEscolha).classList.remove("selecionado");
    }, 3000);

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