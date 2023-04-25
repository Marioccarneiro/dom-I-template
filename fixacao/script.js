const inputParagrafo = document.getElementById(`paragrafo`)

//

const inputTexto = document.getElementById('texto')

console.log(inputTexto)

//

function trocarValores(){
    inputParagrafo.innerHTML = inputTexto.value
}

function imprimirCaracter(){
    console.log(inputTexto.value)
}