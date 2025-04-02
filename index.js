idade = prompt("Qual é sua idade?")
if (idade >= 18) {
    alert("Você pode jogar jokenpo")
} else {
    alert("Você NÃO pode jogar jokenpo")
}

if (idade >= 18) {
    escolhaJogador = prompt("Escolha entre 1 - Pedra✊, 2 - Papel🖐 ou 3 - Tesoura✌")  
    escolhaComputador = Math.floor(Math.random() * 3) + 1  


    if (escolhaJogador == escolhaComputador) {
        alert("Empate!!!")
    }

    if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
            alert("Você perdeu, pc escolheu papel!!!")
        }
        if (escolhaComputador == 3) {
            alert("Você ganhou, pc escolheu tesoura!!!")
        }
    }
    if (escolhaJogador == 2) {
        if (escolhaComputador == 3) {
            alert("Você perdeu, pc escolheu tesoura!!!")
        }
        if (escolhaComputador == 1) {
            alert("Você ganhou, pc escolheu pedra!!!")
        }
    }
    if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
            alert("Você perdeu, pc escolheu pedra!!!")
        }
        if (escolhaComputador == 2) {
            alert("Você ganhou, pc escolheu tesoura!!!")
        }
    }
} 

let nomeEscolhaComputador;
if (escolhaComputador == 1) {
    nomeEscolhaComputador = "Pedra✊"
}
if (escolhaComputador == 2) {
    nomeEscolhaComputador = "Papel🖐"
}
if (escolhaComputador == 3) {
    nomeEscolhaComputador = "Tesoura✌"
}

alert("O computador escolheu " + nomeEscolhaComputador)