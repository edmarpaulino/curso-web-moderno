// em JavaScript o this pode variar dependendo de onde e a forma que ele for invocado
// o this em arrow function não varia, ele permanece sempre o mesmo do contexto léxico
// em que a arrow function foi definida
// o this sever para referenciar o objeto que está sendo executado
// Ele aponta para qual objeto está chamando a função (esse objeto às vezes é chamado de contexto).

const pessoa = {
    saudacao: 'Bom dia!',
    falar() { // o this pode variar a não ser que seja uma arrow function
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// o bind recebe o objeto que referenciará o this
// a função falar não é alterada
// é gerada uma nova função com o this amarrado ao objeto passado como parâmetro
// que é retornada
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// confirmando que o this da função falar não foi alterado pelo método bind
const falar2 = pessoa.falar
falar2()