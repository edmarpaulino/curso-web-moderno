// function declaration
// quando o interpretador do js vai executar o código primeiro
// ele lê e carrega todas as funções, depois ele executa o código
// então uma declaração de função dessa forma vai sofrer esse efeito de hoisting
// e pode ser chamada antes mesmo da sua declaração no código
console.log(soma(3, 4))
function soma(x, y) {
    return x + y
}

// function expression
// não sofre o efeito de hoisting
// ela só pode ser chamada após a sua atribuição
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
// pouco utilizada
// vantagem é que quando estiver debugando o nome dela vai aparecer na stack trace
// não sofre o efeito de hoisting
// ela só pode ser chamada após a sua atribuição
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))