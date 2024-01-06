const key = "f844972e8ec78816fc5b464add77e7b2"
const botao = document.querySelector('.botao-buscar')

botao.addEventListener('click', cliqueiNoBotao)

function cliqueiNoBotao(){
    const cidade = document.querySelector('.nome-cidade').value
    buscarCidade(cidade)
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    colocarDadosNaTela(dados)
}

function colocarDadosNaTela(dados){
    document.querySelector('.cidade').innerHTML = "Tempo em" + ' ' + dados.name
    document.querySelector('.temperatura-max').innerHTML = "Máxima:" + ' ' + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector('.temperatura').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.temperatura-min').innerHTML = "Mínima:" + ' ' + Math.floor(dados.main.temp_min) + "°C"
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade:" + ' ' + dados.main.humidity + "%"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}