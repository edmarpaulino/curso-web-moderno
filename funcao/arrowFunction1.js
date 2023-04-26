let dobro = function (a) {
    return 2 * a
}

// Função arrow é sempre uma função anônima
// Se você quer chamar ela depois, você deve armazenar
// em uma variável
dobro = (a) => {
    return 2 * a
}

// return implícito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
// forma mais reduzida para não utilizar os parenteses
// o underline é um parâmetro mas está sendo ignorado
// JavaScript não te obriga a preencher os parâmetros
ola = _ => 'Olá'
console.log(ola())