// Exemplo de callback no browser

// neste caso o evento que dispara a função callback é o click do mouse no body da página
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}