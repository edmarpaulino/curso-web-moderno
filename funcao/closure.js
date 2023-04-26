// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função
// Escopo que envolve a função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }

    return dentro
}

const minhaFuncao = fora()
// vai imprimir o valor da variável local
console.log(minhaFuncao())