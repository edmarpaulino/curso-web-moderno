// Função construtora serve de molde para a criação de objetos
// Similar a Classe de outras linguagens
// Em JS a Classe é uma maneira mais familiar para quem vem de linguagens OO
// Classe em JS nada mais é que uma função construtora por debaixo dos panos
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    // pertence somente ao escopo da função - não tem como ser acessado diretamente
    let velocidadeAtual = 0

    // metodo público
    // this vai ser responsável por tornar algo vísivel para fora do escopo da função
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeAtual
        }
    }

    // metodo público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

// Os parenteses são opcionais quando não há parâmetros as serem informados
const uno = new Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
// a instanciação (palavra reservada new) de uma Classe (função construtora) gera um objeto
console.log(typeof ferrari)