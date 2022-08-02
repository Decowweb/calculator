function insert (num) {
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function clean () {
    document.getElementById('resultado').innerHTML = ""
}

function back (){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.slice(0, resultado.length - 1)
}

function calcular () {
    let resultado = document.getElementById('resultado').innerHTML
    if(resultado.length > 0) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}