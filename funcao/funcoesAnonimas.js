// função anônima é uma função sem nome
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
// Uma função arrow é sempre anônima, não tem como nomeala
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    },
    comprimentar() { // nova versão do ECMAScript - o nome da função é o nome do atributo
        console.log('Olá, tudo bem?')
    }
}