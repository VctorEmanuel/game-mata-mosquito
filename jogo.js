let altura = 0
let largura = 0
let naoClicado = 1
let tempo = 20
let criarMosca = 1500

nivel = window.location.search.replace('?', '')

if(nivel === 'normal') {
    criarMosca = 1500
} else if (nivel === 'dificil') {
    criarMosca = 1000
} else if (nivel === 'impossivel') {
    criarMosca = 750
}

function ajustaTamanhoDaJanela() { 
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoDaJanela()

let cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'win.html'
    } else {
        document.getElementById('tempo').innerHTML = tempo
    }

}, 1000)

function posicaoRandom() {

    // Remove o antigo mosquito
    if(document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        if(naoClicado > 2) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('coracao'+naoClicado).src = 'imagens/coracao_vazio.png'
        }
        naoClicado++
    }

    let posicaoX = Math.floor(Math.random()*largura) - 90
    let posicaoY = Math.floor(Math.random()*altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criando a mosquinha
    let mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.position = 'absolute'
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove() //O this referencia o mosca
    }

    document.body.appendChild(mosca)
}

function tamanhoAleatorio() {
    return 'mosca' + Math.floor(Math.random() * 3)
}

function ladoAleatorio() {
    return 'lado' + Math.floor(Math.random() * 2)
}

function jogo() {
    window.location.href = "index.html"
}